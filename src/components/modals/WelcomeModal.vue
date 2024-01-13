<template>
    <PillModal ref="modal" class="mod">
        <h1>{{$t('Welcome')}}</h1>
        <p>
            {{$t('Your request has been successfully sent')}}!<br>
            {{$t('Thank you for joining LICHEEK')}}.<br>
            {{$t('Wait for the news from us')}}.<br>
        </p>

        <VButton @click="close">OK</VButton>
    </PillModal>
</template>

<script setup>
    import PillModal from '@/components/modals/PillModal.vue';
    import { ref } from '@vue/reactivity';

//call
    const modal = ref(null); 
    const call = ()=>{
        modal.value.call();
    }
    const close = ()=>{
        modal.value.close();
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
            }

            .btn{
                width: calc(100% - 124px);
            }
        }
    }
    
</style>