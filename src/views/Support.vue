<template>
    <div>
        <h2>Lucas's Registries</h2>
        <img class="title-img" src="@/assets/lucas-registry.jpg"/>
        <br/>
        <p>Since we did not get to do a baby shower due to Luke being born early, we thought we'd add this page in for those that want to help us scramble to get everything our
            boy needs. Nothing is expected, but any help is greatly appreciated! We love you all, and are grateful that you're following our son's amazing journey.
        </p>
        <br/>
        <div class="registry-link"><a :href="targetRegistry" target="_blank"><img src="@/assets/logo-target.png"/></a></div>
        <div class="registry-link"><a :href="amazonRegistry" target="_blank"><img src="@/assets/logo-amazon.png"/></a></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            targetRegistry: "https://www.target.com/gift-registry/giftgiver?registryId=6c24923ab1ad44cfb32cddde571c624b&type=BABY",
            amazonRegistry: "https://www.amazon.com/baby-reg/kelly-houghton-curt-houghton-august-2021-southjordan/KTIYCJBH3CY6?ref=cm_sw_sm_r_px_MOBILE_bcMdbIWnlUsQw"
        }
    }
}
</script>
<style>
.registry-link {
    display:inline-flex;
    margin: 15px;
    background-color: lightblue;
    border-radius: 150px;
    max-width: 350px;
}
</style>