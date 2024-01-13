<template>
    <div class="glob-wr">
        <div class="first-wr wr">
            <div class="back-pill"></div>

            <PicSlider class="pic-slider" gap="30px"/>

            <div class="content">
                <VLogo class="logo"/>
                <div class="text">
                    {{$t('HELLO WORLD')}}<br>{{$t('FROM BRAND NEW SOCIAL NET CREATED FOR YOUR PHOTO/VIDEO AND ANY FREE SELF EXPRESSION')}}
                </div>
            </div>
        </div>
        <div class="second-wr wr">
            <div class="back-pill"></div>
            <div class="content">
                <img src="/img/smartphone.webp" class="smartphone-img" alt="" ref="smartphone">
                <ILogoThin class="logo"/> 

                <div class="contact-wr">
                    <div class="contact-form">
                        <div class="box">
                            <h2>{{$t('START NOW')}}</h2>
                            <VForm @success="welcome.call()"/>
                        </div>
                        <div class="caption" v-if="false">
                            {{`
                            *${$t('we are responsible for keeping your private data confidential')}; 
                            ${$t('if you prefer to get acquainted more properly to our company principles, please click here to read our')}
                            `}}
                            <a @click="callPolicy">{{$t('privacy policy')}}</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <WelcomeModal ref="welcome"/>
    </div>
</template>

<script setup>
    import ILogoThin from '@/components/icons/ILogoThin.vue';

    import VLogo from '@/components/VLogo.vue';
    import PicSlider from '@/components/PicSlider.vue';
    import VForm from '@/components/VForm.vue';
    import WelcomeModal from '@/components/modals/WelcomeModal.vue'
    
    import { ref } from 'vue';

    import { useRoute, useRouter } from 'vue-router';

    const router = useRouter();
    
    const callPolicy = ()=>router.push({query: {modal: 'policy'}});

    const welcome = ref(null);

</script>

<style lang="scss" scoped>
    @import '@/style/mixins.scss';

    .glob-wr{
        overflow: hidden;
    }

    .wr{
        height: 100vh;
        width: 100%;
        position: relative;
    }

    .back-pill{
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        overflow: hidden;

        &::after{
            @include pseudo-absolute;
        }
    }
    
    .first-wr{
        background: var(--c-coral);

        .back-pill::after{
            height: calc(100% - 90px);
            width: calc(100% - 60px);
            @include directions(45px, 30px, 40px, 30px);
            box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);
            border-radius: 167px;
        }

        .content{
            height: 100%;
            width: 100%;
            @include flex-col;
            justify-content: center;
            position: relative;
            padding: 0 75px;
            z-index: 3;
            gap: 45px;

            .logo{
                width: 100%;
                filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));

                :deep(.ico){
                    height: 70%;
                }
            }

            .text{
                width: 400px;
                font-size: 20px;
                font-weight: 700;
            }

            *::selection{
                background: var(--c-new-blue);
                color: var(--c-white);
            }
        }

        .pic-slider{
            position: absolute;
            left: 39.5%;
            width: 40.5%;
            z-index: 2;
            top: 75px;
        }
    }

    .second-wr{
        background: var(--c-new-blue);

        height: 80vh;
        min-height: 560px;

        .back-pill{
            z-index: 3;

            &::after{
                height: 150%;
                width: 150%;
                top: 37px;
                left: 30px;
                box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);
                border-radius: 167px;
                background: var(--c-new-blue);
            }
        }

        .content{
            position: relative;
            z-index: 5;
            height: 100%;
            width: 100%;

            .smartphone-img{
                position: absolute;
                left: 15%;
                top: -150px;
                height: 80vh;
                z-index: 1;
                animation: float 5s infinite alternate;
            }

            .logo{
                position: absolute;
                height: 50%;
                left: 100px;
                top: 40%;
                filter: drop-shadow(0px 0px 16px #00000040);
                animation: rotation 20s linear infinite reverse;
            }

            .contact-wr{
                width: calc(85% - 39vh);
                padding: 0 60px;
                height: 100%;
                @include flex-c;
                position: absolute;
                right: 0;

                .contact-form{
                    max-width: 590px;
                    width: 100%;
                    top: 0;
                    bottom: 0;
                    margin: auto;
                    height: max-content;

                    .box{
                        width: 100%;
                        @include flex-col;
                        align-items: center;
                        height: max-content;
                        border-radius: 128px;
                        padding: 50px 60px;
                        box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.25);
                        transition: .3s;

                        h2{
                            font-size: 36px;
                            font-weight: 700;
                            margin-bottom: 25px;
                            text-align: center;
                        }

                        &:hover{
                            box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.15);
                        }
                    }

                    .caption{
                        font-size: 16px;
                        font-weight: 500;
                        margin-top: 18px;
                        padding: 0 60px;

                        a{
                            font-weight: 700;
                            text-decoration: underline;
                        }
                    }

                    
                }
            }

            
        }

        
    }

    @keyframes rotation {
        100%{
            transform: rotate(1turn);
        }
    }

    @keyframes float {
        100%{
            transform: translateY(4%);
        }
    }
</style>