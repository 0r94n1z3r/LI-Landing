<template>
    <VModal ref="modal" class="mod" @close="emit('close')">
        <slot/>
    </VModal>
</template>

<script setup>
    import VModal from '@/components/ui/VModal.vue' 
    import { ref } from '@vue/reactivity';

    const emit = defineEmits(['close']);

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
            border-radius: 128px;
            width: 100%;
            max-width: 590px;
            padding: 40px;
            @include flex-col;
            gap: 27px;
        }
    }
</style>