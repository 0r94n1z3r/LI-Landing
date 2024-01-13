<template>
    <footer>
        <div class="wr">
            <div class="block">
                <div class="text bold">Licheek LLC©</div>
                <div class="text">{{$t('All rights reserved')}}</div>
            </div>
            <div class="block"><RouterLink class="text" to="" @click="policy.call()">{{$t('Privacy')}}</RouterLink></div>
            <div class="block"><RouterLink class="text" to="" @click="contact.call()">{{$t('For partners')}}</RouterLink></div>
            <div class="block">
                <RouterLink class="text bold" to="" @click="contact.call()">{{$t('Contact us')}}</RouterLink>
                <div class="text lang-switch" @click="Lang().changeLang()">{{Lang().nextLang}}</div>
            </div>
        </div>

        <ContactUsModal ref="contact"/>
        <PolicyModal ref="policy"/>
    </footer>
</template>

<script setup>
    import ContactUsModal from '@/components/modals/ContactUsModal.vue'
    import PolicyModal from '@/components/modals/PolicyModal.vue'

    import Lang from '@/stores/lang.js';
    
    import { ref } from '@vue/reactivity';

    const contact = ref(null);
    const policy = ref(null);
</script>

<style lang="scss" scoped>
    @import '@/style/mixins.scss';

    footer{
        background: var(--c-black);
        padding: 60px;
        border-radius: 37px 37px 0 0;
        margin-top: -37px;
        position: relative;
        z-index: 10;
        @include flex-c;

        .wr{
            width: 100%;
            max-width: 1000px;
            @include flex-jtf;

            .block{
                @include flex-col;
                gap: 10px;

                .text{
                    color: var(--c-white);

                    &.bold{
                        font-weight: 700;
                    }
                }

                .lang-switch{
                    text-transform: uppercase;
                    cursor: pointer;
                    width: max-content;
                    align-self: end;
                }
            }
        }

        @media (max-width: 1000px) {
            border-radius: 4rem 4rem 0 0!important;
            margin-top: -4rem;
            padding: 3.7rem;

            .wr{
                flex-direction: column;
                align-items: center;
                gap: 2rem;

                *{
                    text-align: center;
                }

                .block{
                    gap: 0;

                    &:first-child{
                        padding-bottom: 3rem;
                    }

                    .text{
                        font-size: 1.6rem;
                    }

                    .lang-switch{
                        align-self: center;
                        padding-top: 2rem;
                    }
                }
                
            }
        }
    }
</style>