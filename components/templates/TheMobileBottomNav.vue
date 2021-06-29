<template>
  <nav class="fixed border-t left-0 bottom-0 right-0 z-30 block lg:hidden transition-colors duration-300 ease-linear">
    <div class="flex justify-between item-center h-16">
      <template v-for="link in $t('header.links')">
        <NuxtLink
          v-if="!link.href"
          :key="link.slug"
          class="block md:flex md:justify-center w-full p-2 md:p-4 text-onSurfacePrimary hover:no-underline hover:text-primary-base text-center visited:text-gray transition-colors duration-300 ease-linear"
          :to="
            localePath({
              name: link.slug,
              params: { book: 'get-started', slug: 'installation' },
            })
          "
        >
          <component
            :is="link.icon + '-icon'"
            class="inline-block h-5 fill-current mb-1"
          />
          <span class="block text-xs md:text-base md:pl-3 font-medium text-onSurfacePrimary transition-colors duratio-300 ease-linear">
            {{ link.name }}
          </span>
        </NuxtLink>
        <a
          v-else
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noopener"
          class="block md:flex md:justify-center w-full p-2 md:p-4 text-onSurfacePrimary hover:no-underline hover:text-primary-base text-center visited:text-gray transition-colors duration-300 ease-linear"
        >
          <component
            :is="link.icon + '-icon'"
            class="inline-block h-5 fill-current mb-1"
          />
          <span class="block text-xs md:text-base md:pl-3 font-medium text-onSurfacePrimary transition-colors duratio-300 ease-linear">
            {{ link.name }}
          </span>
        </a>
      </template>
    </div>
  </nav>
</template>

<script>
import CodeIcon from '~/assets/icons/code.svg?inline'
import SmsIcon from '~/assets/icons/sms.svg?inline'
import EnvelopeIcon from '~/assets/icons/envelope.svg?inline'
import CogIcon from '~/assets/icons/cog.svg?inline'

export default {
  components: {
    CodeIcon,
    SmsIcon,
    EnvelopeIcon,
    CogIcon,
  },
}
</script>
