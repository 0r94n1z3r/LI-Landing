<template>
    <div class="form">
        <div class="btn-wr">
            <VButton 
                class="btn"
                @click="goto('https://apps.apple.com/ru/app/licheek/id1670477900')"
            >
                <img class="app-logo" src="/img/downloads/appstore.svg" alt="">
                <div class="qr">
                    <img src="/img/downloads/qr-appstore.webp" alt="">
                </div>
            </VButton>
            <div class="title">
                {{$t('DOWNLOAD ON')}}
                <span>app store</span>
            </div>
        </div>

        
        <div class="btn-wr">
            <VButton 
                class="btn"
                @click="goto('https://play.google.com/store/apps/details?id=com.licheek')"
            >
                <img class="app-logo" src="/img/downloads/google.svg" alt="">
                <div class="qr">
                    <img src="/img/downloads/qr-google.webp" alt="">
                </div>
            </VButton>
            <div class="title">
                {{$t('DOWNLOAD ON')}}
                <span>Google play</span>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { reactive, ref } from '@vue/reactivity';

    let goto = (URL)=>{window.open(URL, "_blank")}

</script>

<style lang="scss" scoped>
    @import '@/style/mixins.scss';

    .form{
        display: flex;
        justify-content: center;
        gap: 38px;

        width: 100%;
        // max-width: 34rem;

        .btn-wr{
            @include flex-col;
            align-items: center;
            gap: 24px;

            .title{    
                @include flex-col;
                text-align: center;
                font-weight: 700;
                font-size: 16px;
                text-transform: uppercase;
            }
        }

        .btn{
            width: 136px;
            height: 136px;
            position: relative;
            overflow: visible;

            .qr{
                width: 100%;
                height: 100%;
                background: var(--c-white);
                position: absolute;
                top: calc(100% + 10px);
                left: 0;
                border-radius: 17px;
                @include flex-c;
                box-shadow: 0px 0px 12px rgb(0 0 0 / 25%);
                pointer-events: none;
                transition: .3s;

                img{
                    display: block;
                    height: 90%;
                    width: 90%;
                }
            }

            &:not(:hover){
                .qr{
                    @include hidden(-10px);
                }
            }

            &:active{
                transform: translateY(2px);
            }
        }
    }
</style>