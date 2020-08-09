<template>
<div class="header">
    <div class="header-left">
        <i class="iconfont">&#xe61c;</i>
    </div>
    <div class="header-search">
        <i class="iconfont">&#xe60c;</i>输入城市/景点/游玩主题
    </div>
    <div class="header-right">
        北京<i class="iconfont">&#xe6aa;</i>
    </div>
</div>    
</template>
<script>
export default {
    
}
</script>
<style scoped lang='stylus'>
@import '~css/var.styl'
.header{
    width: 100%;
    height: .88rem;
    background-color: $bgColor;
    color:#fff;
    font-size: .32rem;
    display: flex;
    
    align-items: center;
}
.header-search{
    flex: 1;
    background-color: #fff;
    height: .6rem;
    /* margin: .11rem 0; */
    line-height: .6rem;
    border-radius: .1rem;
    color: #ccc;
    font-size: .28rem;
}
.header-left{
    width: .4rem;
    padding: 0 .2rem;
    text-align: center;
    font-weight: bold;
    
}
.header-right{
    padding: 0 .2rem;
}
.iconfont{
    font-size: .36rem;
}
</style>