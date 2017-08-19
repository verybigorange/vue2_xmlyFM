<template>
    <div class="title">
        <hr/>
        <p>
            <slot></slot>
        </p>
        <hr/>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@title_color:#8b8b89;
.title {
    width: 90%;
    margin: 0.5rem auto;
    display: flex;
    flex-wrap: nowrap;
    >hr {
        width: 30%;
    }
    >p {
        text-align: center;
        width: 40%;
        margin: 0;
        font-size: 0.6rem;
        color: @title_color;
        line-height: 1rem;
    }
}
</style>


