export const feature1Code = `<script setup>
import AboutUsOption from "@/views/LandingPages/components/AboutUsOption.vue";
import TransparentBlogCard from "@/examples/cards/blogCards/TransparentBlogCard.vue";
</script>
<template>
  <section class="py-9">
    <div class="container">
      <TransparentBlogCard
        image="https://bit.ly/3HH2M6E"
        title="MateLabs mixes machine learning with IFTTT"
        description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
        :action="{
          label: 'Read more',
          route: '/',
          color: 'success',
        }"
      />
    </div>
  </section>
</template>
`;
