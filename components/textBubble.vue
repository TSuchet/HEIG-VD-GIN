<script>
export default {
  props: ['type']
}
</script>

<style>
.textbubble-container{
  display:flex;
  align-items:center;
  border-radius: 12px;
  padding:6px;
  margin-top:6px;
  margin-bottom:6px;
  font-size:0.9rem;
}

.textbubble-icon{
  font-size:20pt;
  min-width:55px;
  padding-left:10px;
  position:relative;
  top:2px;
} 

.info .textbubble-container{
    background-color: #087fa3b6;
}

.warning .textbubble-container{
    background-color: #c37d0d;
}
</style>

<template>
  <div :class="type">
    <div class="textbubble-container">
      <span class="textbubble-icon">
        🛈
      </span>
      <slot></slot>
    </div>
  </div>
</template>