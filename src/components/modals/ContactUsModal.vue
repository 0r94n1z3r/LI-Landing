<template>
    <PillModal ref="modal" class="mod" @close="router.push({query: {}});">
        <h1>{{$t('CONTACT US')}}</h1>
        <p>
            {{$t('You can write us here if you want to become our')}}
            <span>{{$t('commercial partner')}}:</span><br>
            <a href="mailto:partner@licheek.com">partner@licheek.com</a>
        </p>
        <hr>
        <p>
            {{$t('You can write us here if you need help solving any')}}
            <span>{{$t('problems')}}</span>
            {{$t('with our service')}}:
            <br>
            <a href="mailto:support@licheek.com">support@licheek.com</a>
        </p>

        <VButton @click="close">OK</VButton>
    </PillModal>
</template>

<script setup>
    import PillModal from '@/components/modals/PillModal.vue';
    import { ref, onMounted, computed, watch } from 'vue';

    import { useRoute, useRouter } from 'vue-router';

    const route = useRoute();
    const router = useRouter();

    const modalId = computed(()=>route.query?.modal)

    watch(modalId, ()=>{
        if(modalId.value == 'contact')modalCall();
    });
    onMounted(()=>{
        if(modalId.value == 'contact')modalCall();
    })

//call
    const modal = ref(null); 
    const call = ()=>{
        router.push({query: {modal: 'contact'}});
    }
    const modalCall = ()=>{
        modal.value.call();
    }
    const close = ()=>{
        modal.value.close();
        router.push({query: {}});
    }
    defineExpose({
        call,
        close
    });
</script>

<style lang="scss" scoped>
    @import '@/style/mixins.scss';

    .mod{
        :deep(.modal){
            align-items: center;
            padding-left: 60px;
            padding-right: 60px;

            h1{
                font-weight: 700;
                font-size: 36px;
                width: 100%;
                text-align: center;
            }

            p{
                font-size: 18px;
                text-align: center;
                font-weight: 500;
                padding: 0 57px;

                span{
                    font-weight: 700;
                    font-size: 18px;
                }

                a{
                    text-decoration: underline;
                    font-size: 18px;
                }
            }

            hr{
                width: 100%;
                border: none;
                height: 1px;
                background: var(--c-gray);
                margin: 0;
            }

            .btn{
                width: calc(100% - 124px);
            }
        }
    }
    
</style>