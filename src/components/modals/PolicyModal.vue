<template>
    <VModal ref="modal" class="mod" @close="router.push({query: {}});">
        <div class="close" @click="close"><ICross class="ico"/></div>

        <div class="content" @wheel="(e)=>{e.stopPropagation()}">    
            <h1>{{$t('PRIVACY POLICY')}}</h1>

            <div class="block" v-for="(i,k) in content" :key="k">
                <h2>{{i.title}}</h2>
                <p v-for="(j,f) in i.content" :key="f" :class="j.type" v-html="j.text"></p>
            </div>

            <VButton @click="close">OK</VButton>
        </div>
        
    </VModal>
</template>

<script setup>
    import VModal from '@/components/ui/VModal.vue';
    import ICross from '@/components/icons/ICross.vue'
    import policy from '@/docs/privacyPolicy.js';

    import { ref, computed, onMounted, watch } from 'vue';
    
    import { useRoute, useRouter } from 'vue-router';

    const route = useRoute();
    const router = useRouter();

//content
    const content = computed(()=>{
        return policy.find(e => e.lang == 'ru').content
    });

    

//call
    const modalId = computed(()=>route.query?.modal)

    watch(modalId, ()=>{
        if(modalId.value == 'policy')modalCall();
    });
    onMounted(()=>{
        if(modalId.value == 'policy')modalCall();
    })

    const modal = ref(null); 
    const call = ()=>{
        modal.value.call();
        router.push({query: {modal: 'policy'}});
    }
    const close = ()=>{
        modal.value.close();
        router.push({query: {}});
    }
    const modalCall = ()=>{
        modal.value.call();
    }
    defineExpose({
        call,
        close
    });
</script>

<style lang="scss" scoped>
    @import '@/style/mixins.scss';

    ::-webkit-scrollbar{
        width: 8;

        @media (max-width:  1000px) {
            display: none;
        }

        &-track{
            background: var(--c-dark-white);
            border: none;
        }

        &-thumb{
            background: #D9D9D9;
            border-radius: 100px;
        }
    }

    .mod{
        :deep(.modal){
            width: 100%;
            max-width: 907px;
            padding: 40px 9px;
            border-radius: 31px;
            position: relative;

            .content{
                @include flex-col;
                align-items: center;
                overflow-y: auto;
                height: 100%;
                max-height: calc(90vh - 80px);
            }

            .close{
                position: absolute;
                right: 20px;
                top: 20px;

                height: 44px;
                width: 44px;
                @include flex-c;

                border-radius: 50%;

                transition: .3s;
                cursor: pointer;

                .ico{
                    color: var(--c-medium-dark-gray);
                    height: 50%;
                    width: 50%;
                }

                &:hover{
                    background: #00000020;
                }

                &:active{
                    transition: .05s;
                    background: #00000030;
                }

                @media (max-width: 1000px) {
                    display: none;
                }
            }

            h1{
                font-weight: 700;
                font-size: 36px;
                width: 100%;
                text-align: center;
            }

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

            .btn{
                max-width: 340px;
                flex-shrink: 0;
            }
        }
    }

    @media (max-width:  1000px) {
        .mod :deep(.modal){
            h1{
                font-size: 2.5rem;
            }
        }
    }
</style>