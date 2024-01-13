<template>
    <div class="doc-wr">
        <div class="doc-container">
            <div class="logo-wr">
                <div class="logo">
                    <ILogo class="ico"/>
                    <ILogoType class="type"/>
                </div>
            </div>

            <div class="container">
                <div class="sticky">
                    <h1>{{$t(activeItem.title)}}</h1>
                </div>

                <div class="content">
                    <div class="block" v-for="(i,k) in activeItem.content.find(e => e.lang == activeLang).content" :key="k">
                        <h2>{{i.title}}</h2>
                        <p v-for="(j,f) in i.content" :key="f" :class="j.type" v-html="j.text"></p>
                    </div>
                </div>
            </div>

            <!-- <div class="lang-change" :drop="langDrop || null">
                <div class="active">{{activeLang}}<IDropArr class="drop-arr"/></div>
                <div class="list">
                    <div v-for="i in langs" :key="i" @click="changeLang(i)" class="option">{{i}}</div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script setup>
    import ILogo from '@/components/icons/ILogoFilled.vue';
    import ILogoType from '@/components/icons/ILogoType.vue';
    import IDropArr from '@/components/icons/IDropArr.vue';

    import { computed, ref } from 'vue';

    import privacy from '@/docs/privacyPolicy.js';
    import data from '@/docs/privacyPolicy.js';
    import terms from '@/docs/privacyPolicy.js';
    import developers from '@/docs/privacyPolicy.js';
    import partners from '@/docs/privacyPolicy.js';

    const items = [
        {
            key: 'privacypolicy',
            title: "Политика конфиденциальности",
            content: privacy
        },
        {
            key: 'datapolicy',
            title: "Политика использования данных",
            content: data
        },
        {
            key: 'termsofuse',
            title: "Условия пользования",
            content: terms
        },
        {
            key: 'developers',
            title: "О разработчиках",
            content: developers
        },
        {
            key: 'partners',
            title: "Для партнеров",
            content: partners
        }
    ]
    
    
    const props = defineProps({
        type: String
    });

    const title = ref("Политика конфиденциальности");
    const content = computed(()=>{
        return privacy.find(e => e.lang == 'ru').content
    });

   

    const activeItem = computed(()=>items.find(e => e.key == props.type) || items[0])

//lang
    const langs = ref(['ru', 'en'])
    const activeLang = ref(langs.value[0]);
    const langDrop = false;

    const changeLang = (lang)=>{
        activeLang.value = lang;
    }
    
</script>

<style>
    #app{
        overflow: unset;
    }
</style>

<style lang="scss" scoped>
    @import '@/style/mixins.scss';

    .doc-wr{
        background: #fff;
        min-height: 100vh;
        display: flex;
        justify-content: center;

        .doc-container{
            padding: 50px 125px;
            width: 100%;
            max-width: 1920px;
            position: relative;

            .logo-wr{
                .logo{
                    display: flex;
                    width: 184px;
                    gap: 8%;
                    align-items: center;

                    .ico{
                        width: 25%;
                        flex-shrink: 0;
                    }
                    
                    .type{
                        width: 70%;
                    }
                }
            }

            .container{
                display: flex;
                gap: 40px;
                align-items: flex-start;

                &>*{
                    padding-top: 48px;
                }

                .sticky{
                    position: sticky;
                    top: 0;
                    left: 0;

                    h1{
                        font-size: 48px;
                        font-weight: 700;
                        word-break: break-word;
                    }
                }

                .content{
                    width: 100%;
                    max-width: 880px;
                    flex-shrink: 0;
                    margin-top: 55px;
                    

                    .block{
                        padding: 20px 40px 20px;

                        h2{
                            font-size: 20px;
                            font-weight: 700;
                            text-decoration: underline;
                            margin-bottom: 25px;
                        }

                        p{
                            margin-bottom: 20px;
                            position: relative;

                            &.li{
                                padding-left: 20px;

                                &::before{
                                    @include pseudo-absolute;
                                    left: 5px;
                                    top: 8px;
                                    height: 5px;
                                    width: 5px;
                                    border-radius: 50%;
                                    background: #000;
                                }
                            }

                            &.lili{
                                padding-left: 40px;

                                &::before{
                                    @include pseudo-absolute;
                                    left: 25px;
                                    top: 8px;
                                    height: 5px;
                                    width: 5px;
                                    border-radius: 50%;
                                    border: 1px solid #000;
                                }
                            }

                            a{
                                font-weight: 500;
                            }
                        }
                    }
                }
            }

            .lang-change{
                position: fixed;
                bottom: 50px;
            }

            @media (max-width: 1700px) {
                padding: 50px;
            }

            @media (max-width: 1550px) {
                .container{
                    flex-direction: column;

                    .sticky{
                        position: relative;
                    }

                    .content{
                        margin-top: 0;
                        padding-top: 0;
                    }
                }
            }

            @media (max-width: 1000px) {
                padding: 2.6rem;

                .logo-wr{
                    display: flex;
                    justify-content: center;

                    .logo{
                        width: 70%;
                    }
                }
                
                .container{
                    .sticky {
                        width: 100%;

                        h1{
                            text-align: center;
                            width: 100%;
                            font-size: 3rem;
                        }
                    }

                    .content{
                        .block{
                            padding: 0;

                            h2{
                                font-size: 2rem;
                            }

                            p{
                                font-size: 1.6rem;
                            }
                        }
                        
                    }
                }   
                
            }

            
        }

        

        
    }
</style>