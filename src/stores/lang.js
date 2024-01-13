import { defineStore } from 'pinia';
import { ref, computed, reactive, onMounted } from "vue";

export default defineStore("Lang", ()=>{
    const lang = ref(getCookie('lang')?.slice(0,2) || 'en');

    const changeLang = ()=>{
        setCookie('lang', nextLang.value);
        lang.value = nextLang.value;
        location.reload();
    }

    const nextLang = computed(()=>
        (lang.value || '').slice(0,2) == 'ru'?'en':'ru'
    );

//-----------------------

    return {
        lang,
        changeLang,
        nextLang
    }
})