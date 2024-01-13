<template>
    <div class="form">
        <div class="inps">
            <input type="text" :err="err[1] || err[0] || null" @focus="flushErr" :placeholder="$t('my phone')" v-model="data.phone">
            <input type="text" :err="err[2] || err[0] || null" @focus="flushErr" :placeholder="$t('my e-mail')" v-model="data.email">
        </div>
        <VButton class="btn" @mousedown="goBrrr" @click="confirm" :clicked="brrr || null" :loading="loading || null">
            {{$t('GO')}}
            <div class="arr">
                <IArr class="ico" v-for="i in 6" :key="i"/>
            </div>
        </VButton>
    </div>
</template>

<script setup>
    import IArr from '@/components/icons/IArr.vue';

    import $ from 'jquery';

    import { reactive, ref } from '@vue/reactivity';

    const brrr = ref(false);

    const emit = defineEmits(['success']);

    const goBrrr = ()=>{
        brrr.value = true;
        setTimeout(()=>{
            brrr.value = false;
        },300)
    }

    const data = reactive({
        phone: '',
        email: '',
        id_promo: 1
    })

//err
    const err = ref(new Array(3));

    const flushErr = ()=>{
        err.value = new Array(3);
    }

    const validateEmail = (email)=>{
        var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email);
    }
    
//sendData
    const loading = ref(false);

    const confirm = ()=>{
        let isErr = false;
        flushErr();
        err.value = new Array(3);

        if(!data.phone)err.value[1] = true;
        if(!data.email || !validateEmail(data.email))err.value[2] = true;
        
        console.log(err.value);

        if(err.value.filter(e => e).length)return;

        loading.value = true;

        $.ajax({
            type: 'POST',
            url: 'https://licheek.app-rest.ru/api/promo/application',
            data,
            success: (dt)=>{
                if (typeof dt === 'string' && dt.includes("Error://")){
                    err.value[0] = sliceError(dt);
                }else{
                    data.phone = '';
                    data.email = '';
                    emit('success');
                }
            },
            error: (dt)=>{
                if (typeof dt === 'string' && dt.includes("Error://")){
                    err.value[0] = sliceError(dt);
                }else{
                    err.value[0] = 'Server error';
                }
            },
            complete: (dt)=>{
                console.log(dt);
                loading.value = false
            }
        });
    }

    const sliceError = (str)=>{
        str = str.replace('Error://','');
        var sliceId = str.indexOf(']')!=-1?str.indexOf(']'):0
        return str.slice(sliceId+1);
    }

    
    
</script>

<style lang="scss" scoped>
    @import '@/style/mixins.scss';

    .form{
        @include flex-col;
        gap: 21px;
        width: 100%;
        max-width: 340px;

        .inps{
            @include flex-col;
            gap: 12px;

            input{
                height: 56px;
                width: 100%;
                font-size: 28px;
                padding: 0 20px;
                border: none;
                border-radius: 17px;
                font-weight: 500;
                background: var(--c-white);
                transition: .3s;

                &::placeholder{
                    color: var(--c-black);
                }

                &[err]{
                    background: #fca8a8;
                    animation: .3s shake;
                }
            }

            
        }

        @keyframes shake {
            0%  { transform: translate(2px, 1px) }
            10% { transform: translate(-1px, -2px) }
            20% { transform: translate(-3px, 0px) }
            30% { transform: translate(0px, 2px) }
            40% { transform: translate(1px, -1px) }
            50% { transform: translate(-1px, 2px) }
            60% { transform: translate(-3px, 1px) }
            70% { transform: translate(2px, 1px) }
            80% { transform: translate(-1px, -1px) }
            90% { transform: translate(2px, 2px) }
            100%{ transform: translate(1px, -2px) }
        }

        .btn{
            .arr{
                width: 51px;
                overflow: hidden;
                display: flex;
                flex-direction: row-reverse;
                gap: 5px;
                transition: .3s;

                .ico{
                    width: 100%;
                    flex-shrink: 0;
                    transition: .3s;
                }
            }

            &:hover{
                .arr{
                    .ico{
                        transform: translateX(calc(100% + 5px));
                    }
                }
            }

            &:active{
                transform: translateY(2px);
            }

            &[clicked]{
                .arr{
                    .ico{
                        transform: translateX(calc(500% + 25px));
                    }
                }
            }
        }
    }
</style>