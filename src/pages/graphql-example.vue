<script setup lang="ts">
const config = useRuntimeConfig()
const { data, pending, error, refresh } = await useFetch(() =>
  config.gqApi,
  {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-hasura-admin-secret': config.gqSecret,
    },
    body: JSON.stringify({
      query: `query QueryAllPlayers {
        starlight_orchestra_register(order_by: { created_at: desc }) {
          phone
          id
          created_at
        }
      }`,
    }),
  },
)

</script>

<template>
 <h1>{{data}}</h1>
</template>
