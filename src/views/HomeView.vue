<template>
  <main>
  
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div class="bg-white rounded-xl shadow-lg w-full max-w-md p-6">

      <h2 class="text-2xl font-bold text-center mb-6">
        Contact Us
      </h2>

      <form class="space-y-4">

        <!-- Name -->
        <div>
          <label class="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Message -->
        <div>
          <label class="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Write your message"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <!-- Button -->
        <button
          type="submit"
          class="w-full bg-black-600 text-white py-2 rounded-lg hover:bg-blue-700 transition bg-sky-500 hover:bg-orange-700"
        >
          Send Message
        </button>

      </form>
    </div>
  </div>
  </main>
</template>
