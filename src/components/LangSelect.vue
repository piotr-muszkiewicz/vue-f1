<template>
  <div class="locale-changer select">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'locale-changer',
  data () {
    return { langs: ['en', 'pl'] }
  }
}
</script>

<style lang="scss" scoped>
.locale-changer { 
    height: auto !important; 
    select {
        background: none; 
        color: #FFF;
        border-color: rgba(255,255,255,0.2);
        padding: 5px 25px 7px 10px !important;
        font-size: 12px;
        height: auto !important;
        line-height: 12px;
        text-transform: uppercase;
        option {
            color: #363636
        }
    }
    &:after {
        border-color: #FFF !important;
        right: 10px !important;
        top: 50% !important;
        margin-top: -4px !important;
        border-width: 2px;
        width: 6px !important;
        height: 6px !important;  
    }
    &:hover {
        select {
            background: rgba(255,255,255,0.8);
            color: #363636
        }
        &:after {
            border-color: #363636 !important;
        }
    }
}
</style>