<template>
    <div class="flat-promise">
        扁平化处理promise
    </div>
</template>

<script>
    export default {
        name: "flat-promise",
        data: () => {
            return {}
        },
        mounted() {
            const sleep = async (delay) => {
                return new Promise((resolve) => {
                    setTimeout(resolve, delay);
                })
            }
            console.log('flatPromise mounted');
            const job1 = async () => {
                await sleep(2000); // 强制延时2s
                return new Promise((resolve) => {
                    resolve(1);
                });
            }

            const job2 = async () => {
                await sleep(2000); // 强制延时2s
                return new Promise((resolve) => {
                    resolve(2);
                })
            }

            const job3 = async () => {
                await sleep(2000); // 强制延时2s
                return new Promise((resolve) => {
                    resolve(3);
                });
            }

            // 将回调函数扁平化处理

            job1().then((res) => { // 处理业务逻辑
                console.log('done====>', res)
                if (res === 1) {
                    return job2();
                }
            }).then((res) => {
                console.log('done====>', res)
                if (res === 2) {
                    return job3();
                }
            }).then((res) => {
                if (res === 3) {
                    console.log('done====>', res)
                }
            });

        }
    }
</script>

<style scoped lang="less">
    .flat-promise {

    }
</style>