<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <InputBox class="mb-2" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <InputBox placeholder="Password" />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
        
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import InputBox from "@/components/InputBox.vue";

export default {
    components: {
        InputBox
    }
}
</script>