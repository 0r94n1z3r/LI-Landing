<template>
    <div class="wr">
        <div class="slider" :style="{'--gap': gap}">
            <div class="col" v-for="(l,k) in lists" :key="k" >
                <div class="anim-wr">
                    <div class="list">
                        
                            <div class="item" v-for="(i,j) in l.list" :dim="i.dim" :key="j" 
                                :ref="(e)=>{
                                    if(j==0)listItemsRefs[k] = [];listItemsRefs[k][j] = e
                                }"
                            >
                                <img :src="i.src" alt="">
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>        
    </div>

    
    
</template>

<script setup>
    import { ref } from "@vue/reactivity";
    import { computed, onMounted } from "@vue/runtime-core";

    const props = defineProps({gap: String});

    const lists = ref([
        {
            shift: 5,
            v: 1,
            list: [
                {type: 'img', dim: 'tall', src: `/img/slider/(2).webp`},
                {type: 'img', dim: 'square', src: `/img/slider/(7).webp`},
            ]
        }, 
        {
            shift: 10,
            v: -1,
            list: [
                {type: 'img', dim: 'square', src: `/img/slider/(8).webp`},
                {type: 'img', dim: 'square', src: `/img/slider/(5).webp`},
                {type: 'img', dim: 'square', src: `/img/slider/(3).webp`},
            ]
        }, 
        {
            shift: 0,
            v: 1,
            list: [
                {type: 'img', dim: 'square', src: `/img/slider/(6).webp`},
                {type: 'img', dim: 'square', src: `/img/slider/(1).webp`},
                {type: 'img', dim: 'tall', src: `/img/slider/(4).webp`},
            ]
        },
    ])

    const listItemsRefs = ref([new Array(lists.value.length)]);

    // onMounted(()=>{
    //     setInterval(()=>{
    //         drift(0, .5);
    //         drift(1, .5);
    //         drift(2, .5);
    //     }, 300)
    // });

    const drift = (id, n)=>{
        lists.value[id].shift += n * lists.value[id].v;

        if(lists.value[id].shift>=20 || lists.value[id].shift<=0){
            lists.value[id].shift -= n/2 * lists.value[id].v;
            lists.value[id].v *= -1;
        }
    }

</script>

<style lang="scss" scoped>
    @import '@/style/mixins.scss';

    .wr{
        .slider{
            display: flex;
            width: calc(100% + var(--gap) * 2);
            margin-left: calc(-1 * var(--gap));
            
            .col{
                //overflow: hidden;

                &:nth-child(1){
                    animation: drift 10s linear infinite alternate;
                    margin-top: var(--gap);
                }

                &:nth-child(2){
                    animation: drift 17s linear infinite alternate-reverse;
                    margin-top: calc(var(--gap) * 2);
                }

                &:nth-child(3){
                    animation: drift 13s linear infinite alternate;
                }

                

                padding-left: calc(var(--gap) / 2);
                padding-right: calc(var(--gap) / 2);

                &:first-child{
                    padding-left: calc(var(--gap));
                }

                &:last-child{
                    padding-right: calc(var(--gap));
                }

                
                border-radius: 6px;
                width: 100%;

                .list{
                    @include flex-col;
                    gap: var(--gap);
                    transition: .3s linear;
                    
                    .item{
                        border-radius: 6px;
                        overflow: hidden;
                        position: relative;
                        width: 100%;
                        box-shadow: 0 0 calc(var(--gap) / 2) rgba(0, 0, 0, 0.25);

                        &::after{
                            @include pseudo;
                            padding-bottom: 100%;
                        }

                        &[dim="tall"]::after{
                            padding-bottom: 200%;
                        }

                        img{
                            width: calc(100% + 2px);
                            height: calc(100% + 2px);
                            top: -1px;
                            left: -1px;
                            position: absolute;
                            object-fit: cover;
                            display: block;
                        }
                    }
                }
            }

            
        }

        &[mobile]{
            .col:nth-child(2){
                .list{
                    flex-direction: column-reverse;
                }
            }
        }
    }

    @keyframes drift {
        100%{
            transform: translateY(5%);
        }
    }
    
</style>