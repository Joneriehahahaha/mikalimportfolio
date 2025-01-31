<script>
import feather from "feather-icons";

export default {
  name: "Home",
  data: () => {
    return {
      theme: "",
      searchQuery: "",
    };
  },
  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
    feather.replace();
    this.theme = localStorage.getItem("theme") || "light";
  },
  updated() {
    feather.replace();
  },
  methods: {},
  watch: {
    searchQuery(newValue) {
      this.$emit('search', newValue);
    }
  }
};
</script>

<template>
  <section
    class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"
  >
    <!-- Banner left contents -->
    <div class="w-full md:w-1/3 text-left">
      <h1
        class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
      >
        Hi, I'm Jonerie
      </h1>
      <p
        class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"
      >
        A Front End Developer 
      </p>
      <div class="flex justify-center sm:block my-8">
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow text-xl">
        Hire Me
    </button>
</div>

    </div>

    <!-- Banner right illustration -->
    <div class="w-full md:w-2/3 text-right float-right">
      <img
        v-if="theme === 'light'"
        src="@/assets/images/me.jpg"
        alt="Developer"
        class="rounded-full"
      />
      <img
        v-else
        src="@/assets/images/akoni.jpg"
        alt="Developer"
        class="rounded-full"
      />
    </div>
  </section>

  <!-- Projects Portfolio Section -->
  <section class="mt-16 text-center">
    <h2 class="text-4xl font-bold text-[#0F172A] mb-4">Projects Portfolio</h2>
    <p class="text-gray-600 text-lg mb-8">Search projects by title</p>
    <div class="max-w-3xl mx-auto px-4">
      <input 
        v-model="searchQuery"
        type="text"
        placeholder="Search projects..."
        class="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </section>
</template>

<style scoped></style>
