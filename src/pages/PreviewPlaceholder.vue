<template>
    <div class="page">
        <div class="preview-placeholder">
            <RouterLink to="/" class="logo-wr">
                <VLogo rev class="logo"/>
            </RouterLink>
            <div class="contact-form">
                <h2>{{$t(`This ${route.name} is only available`)}}<br>{{$t(`in the Licheek app`)}}</h2>
                <VForm class="form"/>
            </div>
        </div>
        <VFooter/> 
    </div>
    
</template>

<script setup>
    import VForm from "@/components/VForm.vue";
    import VFooter from "@/components/VFooter.vue";
    import VLogo from "@/components/VLogo.vue";

    import { onMounted } from "vue";

    import { useRoute } from "vue-router";
    const route = useRoute();
        
    const props = defineProps({
        id: String
    })

    onMounted(()=>{
        if(route.meta.redir){
            location = 'licheek:/'+route.path;
        }
    })

</script>

<style lang="scss" scoped>
    @import '@/style/mixins.scss';

    .logo-wr{
        .logo{
            flex-direction: row-reverse;

            :deep(.type){
                padding-left: 1.2rem;   
                flex-shrink: 1;
                width: 100%;
            }

            :deep(.ico){ 
                height: 100%;
                flex-shrink: 0;
                width: 18%;
                position: relative;
                bottom: -2px;
            }
        }
    }

    .preview-placeholder{
        max-width: 590px;
        width: 100%;
        top: 0;
        bottom: 0;
        margin: auto;
        height: max-content;
        min-height: 100vh;
        @include flex-c;
        flex-direction: column;


        .contact-form{
            @include flex-col;
            align-items: center;
            height: max-content;
            border-radius: 110px;
            padding: 50px 60px;
            box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.25);
            transition: .3s;
            margin: 40px;

            h2{
                font-size: 29px;
                font-weight: 700;
                margin-bottom: 30px;
                text-align: center;
            }

            &:hover{
                box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.15);
            }

        }

            
    }
    
    @media (max-width: 1000px) {
        .logo-wr{
            width: 100%;
            border-radius: 0 0 7.8rem 7.8rem;
            margin-bottom: -7.8rem;
            padding-bottom: 7.8rem;
            box-shadow: 0 0.4rem 1.6rem rgba(0, 0, 0, 0.14);
            height: max-content;
            background: var(--c-new-blue);
            z-index: 5;
            height: 12.6rem;
            @include flex-c;
            padding: 0 3rem;
            position: relative;

            .logo{
                filter: drop-shadow(0 0 .5rem #00000040);
            }
        }

        .contact-form{
            border-radius: 0 0 7.8rem 7.8rem;
            position: relative;
            z-index: 4;
            @include flex-col;
            align-items: center;
            margin: 0;
            margin-bottom: 10rem;
            width: 100%;
            padding: 4rem 4rem;

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
        }

        .preview-placeholder{
            margin: 0;
            max-width: unset;
            justify-content: flex-start;

            
            
            .contact-form{
                border-radius: 0 0 7.8rem 7.8rem;
                position: relative;
                z-index: 4;
                @include flex-col;
                align-items: center;
                margin: 0;
                margin-bottom: 10rem;
                width: 100%;
                padding: 10rem 2rem 4rem;

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
            }
        }
    }    
</style>