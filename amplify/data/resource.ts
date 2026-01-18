import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
Updated the authorization rule to 'owner' so that data is isolated
on a per-user basis.
=========================================================================*/
const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.owner()]), // Changed from publicApiKey to owner
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    // Updated default mode to 'userPool' for authenticated user access
    defaultAuthorizationMode: "userPool", 
  },
});