<template>
    <div class="page-mobile">
        <div class="card card-blue card-logo">
            <VLogo class="logo"/>
        </div>

        <div class="card card-blue card-form">
            <h2>{{$t('START NOW')}}</h2>
            <VForm class="form" @success="welcome.call()"/>
            <div class="caption" v-if="false">
                {{`
                *${$t('we are responsible for keeping your private data confidential')}; 
                ${$t('if you prefer to get acquainted more properly to our company principles, please click here to read our')}
                `}}
                <a @click="callPolicy">{{$t('privacy policy')}}</a>
            </div>
        </div>

        
        <div class="card card-red card-greet">
            <ILogo class="logo"/>
            <div class="text">
                {{$t('HELLO WORLD')}} {{$t('FROM BRAND NEW SOCIAL NET CREATED FOR YOUR PHOTO/VIDEO AND ANY FREE SELF EXPRESSION')}}
            </div>
            <div class="slider-wr">
                <PicSlider class="pic-slider" gap="2.3rem" mobile/>
            </div>
        </div>

        <div class="smarphone-space">
            <img src="/img/smartphone.webp" class="smartphone" alt="">
        </div>
        
        <div class="card card-top card-red card-join">
            <div class="btn" @click="$('html').scrollTop(0)">{{$t('JOIN')}}</div>
        </div>

        <WelcomeModal ref="welcome"/>

        
    </div>
</template>

<script setup>
    import VLogo from '@/components/VLogo.vue';
    import PicSlider from '@/components/PicSlider.vue';
    import VForm from '@/components/VForm.vue';
    import WelcomeModal from '@/components/modals/WelcomeModal.vue'
    import PolicyModal from '@/components/modals/PolicyModal.vue'

    import $ from 'jquery';

    import ILogo from '@/components/icons/ILogo.vue';

    import { ref } from 'vue';

    import { useRoute, useRouter } from 'vue-router';

    const router = useRouter();
    
    const callPolicy = ()=>router.push({query: {modal: 'policy'}});

    const welcome = ref(null);
    
</script>

<style>
    html{
        background: var(--c-new-blue);
    }
</style>

<style lang="scss" scoped>
    @import '@/style/mixins.scss';
    

    .card{
        width: 100%;
        border-radius: 0 0 7.8rem 7.8rem;
        margin-bottom: -7.8rem;
        padding-top: 7.8rem;
        box-shadow: 0 0.4rem 1.6rem rgba(0, 0, 0, 0.14);
        height: max-content;

        &-blue{
            background: var(--c-new-blue);
        }
        
        &-red{
            background: var(--c-coral);

            ::selection{
                background: var(--c-new-blue);
            }
        }
    }

    .card-logo{
        height: 12.6rem;
        @include flex-c;
        padding: 0 3rem;
        z-index: 5;
        position: relative;

        .logo{
            flex-direction: row-reverse;
            filter: drop-shadow(0 0 .5rem #00000040);

            :deep(.type){
                padding-left: 1.2rem;   
                flex-shrink: 1;
                width: 100%;
            }

            :deep(.ico){ 
                height: 100%;
                flex-shrink: 0;
                width: 18%;
            }
        }
    }

    .card-form{
        position: relative;
        z-index: 4;
        @include flex-col;
        align-items: center;

        h2{
            font-size: 3.2rem;
            font-weight: 700;
            padding: 3rem;
            text-align: center;
        }

        :deep(.form){
            max-width: unset;
            padding: 0 2.5rem;
            gap: 4.4rem;
            margin-bottom: 7.4rem;

            .inps{
                gap: 2rem;

                input{
                    height: 5.6rem;
                    width: 100%;
                    padding: 0 2rem;
                    border-radius: 1.7rem;
                    font-size: 2.8rem;
                }
            }

            .btn-wr{
                gap: 2rem;

                .title, .title span{
                    font-size: 1.7rem;
                }
            }

            .btn{
                height: 10.6rem;
                width: 10.6rem;
                border-radius: 1.7rem;
                font-size: 2.8rem;
                padding: 0;

                .app-logo{
                    height: 65%;
                    width: 65%;
                }

                .qr{
                    display: none;
                }

                .arr{
                    width: 5.1rem;

                    .ico{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }

        .caption{
            font-size: 1.6rem;
            font-weight: 500;
            padding: 0 2.5rem;
            margin-bottom: 7rem;

            a{
                font-size: 1.6rem;
                font-weight: 700;
                text-decoration: underline;
            }
        }
    }

    .card-greet{
        @include flex-col;
        align-items: center;
        gap: 2.7rem;

        .logo{
            width: 21.7rem;
            margin-top: -4rem;
            z-index: 5;
            filter: drop-shadow(0 0 1.6rem #00000040);
            animation: rotation 105s infinite alternate;
        }

        .text{
            font-size: 2.4rem;
            text-align: center;
            font-weight: 700;
            padding: 0 3rem;
        }

        .slider-wr{
            width: 100%;
            height: 65rem;
            padding-top: 5rem;
            margin-top: -5rem;
            margin-bottom: -5rem;
            overflow: hidden;
        }

        .pic-slider{
            width: calc(100% + 2.3rem * 2);
            margin-top: -3.6rem;
            margin-bottom: -2.3rem;
            margin-left: -2rem;
            
            :deep(.item){
                border-radius: .6rem!important;
            }
        }

    }

    .smarphone-space{
        height: 61rem;
        @include flex-c;
        align-items: center;
        margin-bottom: -8rem;

        .smartphone{
            height: 65.3rem;
            z-index: 6;
        }
    }

    .card-join{
        border-radius: 7.8rem 7.8rem 0 0;
        margin-bottom: 0;
        padding-bottom: 7.8rem;

        .btn{
            margin: 6rem 4.5rem;
            margin-bottom: 0;
            height: 5.6rem;
            border-radius: 1.7rem;
            font-size: 2.8rem;
            cursor: pointer;

            background: var(--c-black);
            color: var(--c-white);
            @include flex-c;

            .arr{
                width: 5.1rem;

                .ico{
                    width: 100%;
                    height: 100%;
                }
            }

            &:active{
                transform: translateY(2px);
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