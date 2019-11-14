<template>
    <div id="container">
        <div id="globalArea"></div>
    </div>
</template>

<script>
export default {
    name: "workspace.vue",
    components: {
    },
    data: ()=>{
        return {
        }
    },
    mounted(){
        this.init3DEarth();
    },
    methods: {
        init3DEarth() {
            const config = {
                color: '#5EA6FE',
                lineWidth: 0.5,
                levels: 5,
                intensity: 2.5,
                threshold: 0.01
            }

            const canvas = document.createElement('canvas');
            canvas.width = 2048;
            canvas.height = 1024;
            const context = canvas.getContext('2d');

            context.lineWidth = config.lineWidth;
            context.strokeStyle = config.color;
            context.fillStyle = config.color;
            context.shadowColor = config.color;

            $.when(
                $.getScript('static/plugin/world.js'),
                $.getScript('static/plugin/d3-contour.js'),
                $.getScript('static/plugin/d3-geo.js'),
                $.getScript('static/plugin/d3-timer.js')
            ).done(function () {
                image('static/img/8.jpg').then(function (img) {
                    console.log('start');
                    const m = img['height'],
                        n = img['width'],
                        values = new Array(n * m),
                        contours = d3.contours().size([n, m]).smooth(true),
                        projection = d3.geoIdentity().scale(canvas.width / n),
                        path = d3.geoPath(projection, context);

                    //   StackBlur.R(image, 5);

                    for (let j = 0, k = 0; j < m; ++j) {
                        for (let i = 0; i < n; ++i, ++k) {
                            values[k] = img['data'][(k << 2)] / 255;
                        }
                    }

                    const opt = {
                        image: canvas,
                        onupdate: function () {}
                    }

                    let results = [];

                    function update(threshold, levels) {
                        context.clearRect(0, 0, canvas.width, canvas.height);
                        const thresholds = [];
                        for (let i = 0; i < levels; i++) {
                            thresholds.push((threshold + 1 / levels * i) % 1);
                        }
                        results = contours.thresholds(thresholds)(values);
                        redraw();
                    }

                    function redraw() {
                        results.forEach(function (d, idx) {
                            context.beginPath();
                            path(d);
                            context.globalAlpha = 1;
                            context.stroke();
                            if (idx > config.levels / 5 * 3) {
                                context.globalAlpha = 0.01;
                                context.fill();
                            }
                        });
                        opt.onupdate();
                    }

                    d3.timer(function (t) {
                        const threshold = (t % 10000) / 10000;
                        update(threshold, 1);
                    });

                    initCharts(opt);

                    update(config.threshold, config.levels);

                });

                function image(url) {
                    return new Promise(function (resolve) {
                        const img = new Image();
                        img.src = url;
                        img.onload = function () {
                            const canvas1 = document.createElement('canvas');
                            canvas1.width = img.width / 8;
                            canvas1.height = img.height / 8;
                            const context1 = canvas1.getContext('2d');
                            context1.drawImage(img, 0, 0, canvas1.width, canvas1.height);
                            resolve(context1.getImageData(0, 0, canvas1.width, canvas1.height));
                        };
                    });
                }

                function initCharts(opt) {
                    const myChart = echarts.init(document.getElementById('globalArea'))
                    const canvas2 = document.createElement('canvas');
                    const mapChart = echarts.init(canvas2, null, {
                        width: 2048,
                        height: 1024
                    });

                    const contourChart = echarts.init(document.createElement('canvas'), null, {
                        width: 2048,
                        height: 1024
                    });

                    const img = new echarts.graphic.Image({
                        style: {
                            image: opt.image,
                            x: -1,
                            y: -1,
                            width: opt.image.width + 2,
                            height: opt.image.height + 2
                        }
                    });
                    contourChart.getZr().add(img);

                    opt.onupdate = function () {
                        img.dirty();
                    };

                    mapChart.setOption({
                        series: [{
                            type: 'map',
                            map: 'world',
                            // 绘制完整尺寸的 echarts 实例
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            boundingCoords: [
                                [-180, 90],
                                [180, -90]
                            ]
                        }]
                    });

                    const option = {
                        tooltip: {
                            show: true
                        },
                        globe: {
                            baseTexture: 'static/img/8.png',
                            shading: 'color',
                            light: { // 光照阴影
                                main: {
                                    color: '#44fcf7', // 光照颜色
                                    intensity: 0, // 光照强度
                                    shadowQuality: 'ultra', // 阴影亮度
                                    shadow: false, // 是否显示阴影
                                    alpha: 40,
                                    beta: -30
                                },
                                ambient: {
                                    intensity: 1,
                                    // color: '#44fcf7'
                                }
                            },
                            viewControl: {
                                center: [0, 15, 0],
                                alpha: 30,
                                beta: 160,
                                autoRotate: true,
                                autoRotateAfterStill: 10,
                                distance: 240,
                                autoRotateSpeed: 4
                            },
                            postEffect: { // 为画面添加高光，景深，环境光遮蔽（SSAO），调色等效果
                                enable: true, // 是否开启
                                SSAO: { // 环境光遮蔽
                                    radius: 1, // 环境光遮蔽的采样半径。半径越大效果越自然
                                    intensity: 1, // 环境光遮蔽的强度
                                    enable: true
                                }
                            },

                            layers: [{
                                type: 'blend',
                                blendTo: 'emission',
                                texture: contourChart,
                                intensity: config.intensity
                            }]
                        },
                        series: [{ // 点
                            type: 'scatter3D',
                            blendMode: 'lighter',
                            coordinateSystem: 'globe',
                            showEffectOn: 'render',
                            zlevel: 2,
                            effectType: 'ripple',
                            symbolSize: 15,
                            rippleEffect: {
                                period: 4,
                                scale: 4,
                                brushType: 'fill'
                            },

                            hoverAnimation: true,
                            itemStyle: {
                                normal: {
                                    color: 'rgba(235, 232, 6, 0.8)'
                                }
                            },
                            data: [
                                [51.511744, 25.292405],
                                [28.047305, -26.204103],
                                [30.5234, 50.450099],
                                [15.981919, 45.815008],
                                [19.940063, 50.100353],
                                [6.143158, 46.204389],
                                [8.541694, 47.376888],
                                [-8.629105, 41.157944],
                                [-9.139337, 38.722253],
                                [4.352033, 50.849644],
                                [24.940524, 60.170675],
                                [19.040235, 47.497913],
                                [16.373819, 48.208176],
                                [30.30604, 59.933177],
                                [37.61501, 55.75696],
                                [-79.383184, 43.653226],
                                [-123.120738, 49.28273],
                                [120.657423, 24.166601],
                                [120.32277, 22.623158],
                                [121.573737, 25.040797],
                                [109.19224, 12.24372],
                                [106.70324, 10.77824],
                                [-6.310565, 53.330204],
                                [-2.242631, 53.48076],
                                [144.963058, -37.813628],
                                [151.209296, -33.86882],
                                [-2.58791, 51.454512],
                                [-0.127758, 51.50735],
                                [8.682127, 50.110921],
                                [106.82648, -6.17146],
                                [11.58198, 48.135127],
                                [115.188916, -8.409518],
                                [13.404954, 52.520006],
                                [11.255814, 43.769561],
                                [14.268124, 40.851775],
                                [6.773456, 51.22774],
                                [9.189982, 45.464203],
                                [10.006974, 53.553044],
                                [12.496365, 41.902783],
                                [172.636225, -43.532055],
                                [11.289923, 49.489962],
                                [174.763331, -36.84846],
                                [103.819836, 1.352083],
                                [113.551589, 22.19316],
                                [9.73201, 52.375891],
                                [6.960279, 50.937529],
                                [-81.438886, 8.141746],
                                [125.060375, 7.936378],
                                [9.182932, 48.775847],
                                [2.173404, 41.385064],
                                [-3.70379, 40.416775],
                                [2.352222, 48.856615],
                                [98.993483, 18.787621],
                                [98.906284, 8.0863],
                                [98.338088, 7.951933],
                                [100.571435, 13.730029],
                                [18.078647, 59.326273],
                                [135.502165, 34.693738],
                                [141.354376, 43.062096],
                                [127.680932, 26.212401],
                                [136.906398, 35.181446],
                                [139.764887, 35.682084],
                                [108.326551, 22.836919],
                                [-80.19773, 25.77481],
                                [-118.24532, 34.05349],
                                [-122.419416, 37.774929],
                                [-73.864827, 40.844782],
                                [-95.122065, 29.866244],
                                [101.686855, 3.139003],
                                [14.4378, 50.075537],
                                [126.977969, 37.566535],
                                [126.498302, 33.489012],
                                [1.43285, 43.600714],
                                [-104.990251, 39.739236],
                                [-104.990251, 39.739236],
                                [-84.39111, 33.74831],
                                [135.768029, 35.011636],
                                [28.978359, 41.008238],
                                [-95.122065, 29.866244],
                                [-86.830385, 33.528822],
                                [99.8, 6.35],
                                [145.75561, -16.933169],
                                [85.325791, 27.71903],
                                [21.012229, 52.229675],
                                [-77.036871, 38.907192],
                                [5.322054, 60.391258],
                                [-114.071182, 51.019961],
                                [12.568337, 55.676097],
                                [-46.633309, -23.55052],
                                [-70.669266, -33.44889],
                                [-70.669266, -33.44889],
                                [-82.501625, 27.892312],
                                [149.127663, -35.282707],
                                [-99.133208, 19.432608],
                                [135.805, 34.685087],
                                [-81.37739, 28.53823],
                                [-97.74299, 30.26759],
                                [12.315515, 45.440847],
                                [-90.071532, 29.951066],
                                [72.828353, 18.972804],
                                [104.138648, 30.718551],
                                [77.118351, 28.649029],
                                [-58.381559, -34.603684],
                                [-78.88214, 42.896731],
                                [153.062298, -27.5459],
                                [-2.242631, 53.48076],
                                [100.332762, 5.416346],
                                [-157.858333, 21.306944],
                                [116.07532, 5.97884],
                                [-71.050423, 42.352286],
                                [126.498302, 33.489012],
                                [131.886689, 43.116449],
                                [-75.697193, 45.421529],
                                [-3.188267, 55.953251],
                                [115.94168, -31.873019],
                                [77.586026, 12.983096],
                                [168.662643, -45.031164],
                                [-111.88822, 40.76031],
                                [136.613755, 35.406999],
                                [79.861243, 6.927079],
                                [-87.63245, 41.88425],
                                [-73.720175, 45.498169],
                                [-122.32945, 47.603572],
                                [20.380225, 44.68127],
                                [23.7364, 37.97614],
                                [-75.165222, 39.952584],
                                [-84.468829, 39.168783],
                                [-96.796988, 32.776664],
                                [-83.048, 42.33168],
                                [55.30883, 25.26952],
                                [-43.172896, -22.906847],
                                [129.075642, 35.179554],
                                [138.600746, -34.928499],
                                [-21.613143, 64.184654],
                                [-115.13997, 36.17191],
                                [112.238749, 30.067011],
                                [120.98453, 14.58865],
                                [114.186125, 22.293586],
                                [113.551589, 22.19316],
                                [105.85462, 21.02892]
                            ]

                        }]
                    }
                    // 随机数据

                    myChart.setOption(option);
                }

            });
        }
    }
}
</script>

<style scoped lang="less">
    #container{
        >div.title{
            color: skyblue;
        }
        >div#globalArea{
            width: 900px;
            height: 900px;
        }
    }
</style>