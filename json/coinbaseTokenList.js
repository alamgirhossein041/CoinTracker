const tokenListCoinbase = [
    {
        "name": "Project Galaxy",
        "id_token": "9811803c-3c98-46a0-9e1c-3ae664677a49",
        "id_wallet": "5c600887-510e-52ca-a421-d127635976b4",
        "code": "GAL",
        "type": "wallet",
        "amount": "0.81773614",
        "updated_at": 1661413631130
    },
    {
        "name": "Aleph.im",
        "id_token": "23cd23c2-ba2c-5343-af47-cb3cefa17f37",
        "id_wallet": "964971b2-f1d2-5414-a069-a8f3222ef852",
        "code": "ALEPH",
        "type": "wallet",
        "amount": "11.49131832",
        "updated_at": 1661413631130
    },
    {
        "name": "Golem",
        "id_token": "571b250e-97fe-506f-8e37-300e6df1de67",
        "id_wallet": "463856a9-b0a8-5a4a-b7b4-ab79b8dbd42d",
        "code": "GNT",
        "type": "wallet",
        "amount": "0.00000000",
        "updated_at": 1661413631130
    },
    // {
    //     "name": "Marlin",
    //     "id_token": "748257f0-fb9c-5f0d-8a4b-f6402051b7fd",
    //     "id_wallet": "6ae6d802-0b9b-5f72-acf1-5beafb6ddf58",
    //     "code": "POND",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631130
    // },
    // {
    //     "name": "Dogecoin",
    //     "id_token": "d9a3edfa-1be7-589c-bd20-c034f3830b60",
    //     "id_wallet": "c1189be2-da58-5d31-9161-8bd182b826b9",
    //     "code": "DOGE",
    //     "type": "vault",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631130
    // },
    // {
    //     "name": "Fetch.ai",
    //     "id_token": "3672ab4a-25e0-57a8-b029-99239c081958",
    //     "id_wallet": "9d730b70-bf17-50fa-9f35-eedb489e0896",
    //     "code": "FET",
    //     "type": "vault",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631130
    // },
    // {
    //     "name": "Ethereum 2",
    //     "id_token": "3bec5bf3-507a-51ba-8e41-dc953b1a5c4d",
    //     "id_wallet": "f5ccdcc1-170f-514d-89f2-89ab2a32bd0b",
    //     "code": "ETH2",
    //     "type": "wallet",
    //     "amount": "0.09389311",
    //     "updated_at": 1661413631130
    // },
    // {
    //     "name": "MyNeighborAlice",
    //     "id_token": "e1c4777e-0377-5ccd-be1e-fdb757acb297",
    //     "id_wallet": "8f8148b9-9f25-57f7-8bd1-163179a270b0",
    //     "code": "ALICE",
    //     "type": "wallet",
    //     "amount": "0.000000",
    //     "updated_at": 1661413631130
    // },
    // {
    //     "name": "Wrapped Centrifuge",
    //     "id_token": "19f93d90-a629-53d3-b1c1-45b874e9f125",
    //     "id_wallet": "acb0d3f1-26fc-55fe-a840-a9b5c07d3517",
    //     "code": "WCFG",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631130
    // },
    // {
    //     "name": "BarnBridge",
    //     "id_token": "b5652bd9-8ea8-5451-b153-96fbcba1ace5",
    //     "id_wallet": "91865722-780a-571a-beab-b4645d84a91c",
    //     "code": "BOND",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631130
    // },
    // {
    //     "name": "COTI",
    //     "id_token": "95c91657-a486-5b3f-a6e4-d0831331dcd1",
    //     "id_wallet": "18b44c6c-26a6-51cd-bcc2-51359c3cf622",
    //     "code": "COTI",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631130
    // },
    // {
    //     "name": "Shiba Inu",
    //     "id_token": "d6031388-71ab-59c7-8a15-a56ec20d6080",
    //     "id_wallet": "e9182f66-a639-5a56-8eb4-daa55a761c88",
    //     "code": "SHIB",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631130
    // },
    // {
    //     "name": "Horizen",
    //     "id_token": "ef343d07-52fe-5fee-88ad-ddf1a9e2d852",
    //     "id_wallet": "634b2397-6e9c-5d2b-b7f5-7e3740e62f74",
    //     "code": "ZEN",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Gods Unchained",
    //     "id_token": "c9b055af-2d25-49b3-b449-42bec9846a30",
    //     "id_wallet": "b77b4b92-895a-5c37-9b5f-62fd47909d6b",
    //     "code": "GODS",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Tellor",
    //     "id_token": "248f278e-1c74-5b55-a554-4f3ee1aef291",
    //     "id_wallet": "8fc29459-6f3a-53b2-bc80-126a78d99132",
    //     "code": "TRB",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Ethereum",
    //     "id_token": "d85dce9b-5b73-5c3c-8978-522ce1d1c1b4",
    //     "id_wallet": "e33d3c7e-c6bf-5c5e-8860-4370cefc5390",
    //     "code": "ETH",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Synthetix Network Token",
    //     "id_token": "3bd5bbea-a525-520c-9d2a-2d842e543caa",
    //     "id_wallet": "23cf1520-186e-5091-b42b-e60b969c2db1",
    //     "code": "SNX",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Orca",
    //     "id_token": "ba24ad7b-0a8b-533d-816b-e693d9f8a871",
    //     "id_wallet": "c6a5b99d-1338-5689-8810-cdbd4fd0d097",
    //     "code": "ORCA",
    //     "type": "wallet",
    //     "amount": "0.000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Tribe",
    //     "id_token": "09fa97ba-0baa-554b-a4a7-bfc4d00f4086",
    //     "id_wallet": "69b82716-15cd-5304-9e0c-6b39f27cbb09",
    //     "code": "TRIBE",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Dia",
    //     "id_token": "d8d9de8a-d13b-57bc-99cb-b1d546f820d6",
    //     "id_wallet": "048eea7d-96e9-5df4-a8ec-b82a130255fa",
    //     "code": "DIA",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Ren",
    //     "id_token": "fc771e74-4047-5510-812f-ca8d6ffedcdb",
    //     "id_wallet": "0def7d92-3226-564f-9683-8dc523b425c6",
    //     "code": "REN",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "REPv2",
    //     "id_token": "589af19a-c362-557f-9fb9-9851684a37d0",
    //     "id_wallet": "fbdb7930-39b8-55c4-9fcc-9d9fb67351b7",
    //     "code": "REPV2",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Compound",
    //     "id_token": "65557d44-082d-50a1-a68b-bc98d961f794",
    //     "id_wallet": "4f25aa91-570e-5b5a-9229-fae0591d7482",
    //     "code": "COMP",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Loopring",
    //     "id_token": "6ffa1a5b-622b-596b-893a-56cfb152beb2",
    //     "id_wallet": "da81e350-ac0e-52a1-8ec8-1897a53ea125",
    //     "code": "LRC",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Quickswap",
    //     "id_token": "f04b2f59-319f-5fb5-ba88-2c33cca01901",
    //     "id_wallet": "8dc8875b-9494-5bf5-9e6a-a21e2cf923c8",
    //     "code": "QUICK",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "PLU",
    //     "id_token": "b7ecf251-60ee-5aa6-8271-2b946cc58edd",
    //     "id_wallet": "4222700b-1703-51e6-9d03-15e9967e043e",
    //     "code": "PLU",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Stellar Lumens",
    //     "id_token": "13b83335-5ede-595b-821e-5bcdfa80560f",
    //     "id_wallet": "d211a2f0-cab0-5001-88c6-5d08078cafb9",
    //     "code": "XLM",
    //     "type": "wallet",
    //     "amount": "0.0000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Goldfinch Protocol",
    //     "id_token": "b84ad585-cbf9-48a5-91fb-bc35c9dcca14",
    //     "id_wallet": "69bf7d69-8210-56bc-b0c2-bb5a9cd018a9",
    //     "code": "GFI",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Maker",
    //     "id_token": "5553e486-7a85-5433-a5c1-aaeb18a154dd",
    //     "id_wallet": "ff5a4137-178f-51d6-8ed0-23412692f7bf",
    //     "code": "MKR",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "JasmyCoin",
    //     "id_token": "c0158cc5-1f31-5662-9da5-c06867f2baad",
    //     "id_wallet": "33d3832c-00cc-5f3e-ad9a-4eb63a58fd31",
    //     "code": "JASMY",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Celo",
    //     "id_token": "cfc02e75-e09b-535b-b35c-3c8bb0e63462",
    //     "id_wallet": "a90949d1-a271-550e-bd47-c28d53ada26d",
    //     "code": "CGLD",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Moss Carbon Credit",
    //     "id_token": "244002b6-d9c8-51bb-9c68-15ac514100b0",
    //     "id_wallet": "7496f513-538d-51b0-8533-fb5806fb1040",
    //     "code": "MCO2",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "mStable USD",
    //     "id_token": "222118db-0430-56d8-a518-e124c351fc37",
    //     "id_wallet": "0fa624c2-4eb6-5e8a-a50a-49ec50f55667",
    //     "code": "MUSD",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Immutable X",
    //     "id_token": "1143be59-e5ec-4942-8c39-1c3424499ae0",
    //     "id_wallet": "6ca89266-394b-5b88-9516-4d6761a7acbd",
    //     "code": "IMX",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Keep Network",
    //     "id_token": "cb05fece-8b7f-5717-a317-df3979b4ce12",
    //     "id_wallet": "5deff7cd-21fc-5e8e-8320-6a923c71ef99",
    //     "code": "KEEP",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Alchemix",
    //     "id_token": "c312e620-7011-59bc-93b5-9c03832ce252",
    //     "id_wallet": "a6cd29fd-d635-5660-9e1c-c2a65e28e205",
    //     "code": "ALCX",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Truefi",
    //     "id_token": "248c3984-79c8-5df2-a35d-bbd3a3e16e70",
    //     "id_wallet": "3e863fae-35a3-5124-b2cc-d1ef7afdf2fd",
    //     "code": "TRU",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Dash",
    //     "id_token": "b9c43d61-e77d-5e02-9a0d-800b50eb9d5f",
    //     "id_wallet": "9ea812b6-cb82-52ea-8ea5-015335009359",
    //     "code": "DASH",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Polygon",
    //     "id_token": "026bcc1e-9163-591c-a709-34dd18b2e7a1",
    //     "id_wallet": "c509609b-d3a7-52a7-86d6-111477bb1785",
    //     "code": "MATIC",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "TerraUSD",
    //     "id_token": "05120843-11c1-5b66-9df2-395db6d7ed6b",
    //     "id_wallet": "b57aa69a-7a46-5206-a3f9-39c249c0fa6a",
    //     "code": "UST",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "ShapeShift FOX Token",
    //     "id_token": "17278d3a-ecf4-584f-abe1-903f2b06aad5",
    //     "id_wallet": "6080819a-b5eb-5f3f-970f-465ea383c2af",
    //     "code": "FOX",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Quantstamp",
    //     "id_token": "f8617ea2-6a98-5e59-adc9-c7af4a984531",
    //     "id_wallet": "9faaaec4-53a7-5d2c-8a19-f197207acfb2",
    //     "code": "QSP",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Cosmos",
    //     "id_token": "64c607d2-4663-5649-86e0-3ab06bba0202",
    //     "id_wallet": "2915ff25-2fcc-571e-907b-f0199c8835c4",
    //     "code": "ATOM",
    //     "type": "wallet",
    //     "amount": "0.000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Rarible",
    //     "id_token": "c148e875-86eb-5f25-adcf-a51d01120886",
    //     "id_wallet": "fcc58c69-acbf-501e-92cf-be09af147dfb",
    //     "code": "RARI",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Voyager Token",
    //     "id_token": "6f45890a-c456-55da-bcfe-b10ced22818c",
    //     "id_wallet": "4c3b3503-c80b-57e4-b150-1a17073dec40",
    //     "code": "VGX",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "EOS",
    //     "id_token": "8d556883-6c26-5a88-9d8f-fa41fe8ed76e",
    //     "id_wallet": "3bdbdfb4-5e3d-53be-a24b-176b8aa24543",
    //     "code": "EOS",
    //     "type": "wallet",
    //     "amount": "0.0000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Propy",
    //     "id_token": "ba3dd7df-6c9c-52cf-b0ba-829b1dba63c9",
    //     "id_wallet": "57c49a50-e2c7-5cb3-b3a3-188a936973d5",
    //     "code": "PRO",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Polymath",
    //     "id_token": "11c99387-6be3-53cf-8896-5ca867d201d3",
    //     "id_wallet": "77d029db-9fe9-5b89-8e19-e3427ac0468e",
    //     "code": "POLY",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Tether",
    //     "id_token": "b26327c1-9a34-51d9-b982-9b29e6012648",
    //     "id_wallet": "649ebb4b-891d-5f47-b65c-4d39e27e999e",
    //     "code": "USDT",
    //     "type": "wallet",
    //     "amount": "0.000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Origin Protocol",
    //     "id_token": "070e2e07-1f4c-5556-9b3c-22f924e9fa1a",
    //     "id_wallet": "fa5344c7-2574-58d0-9e5e-ae6c73f5400c",
    //     "code": "OGN",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Tezos",
    //     "id_token": "69e559ec-547a-520a-aeb3-01cac23f1826",
    //     "id_wallet": "e4540aab-32e5-53b3-ab7c-fb903304d27f",
    //     "code": "XTZ",
    //     "type": "wallet",
    //     "amount": "0.000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "SHPING",
    //     "id_token": "31e33a5d-2ee0-51ae-b172-51163e486230",
    //     "id_wallet": "2c4bd4b3-55f6-5045-a0eb-b763ad1558fc",
    //     "code": "SHPING",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Zcash",
    //     "id_token": "1d3c2625-a8d9-5458-84d0-437d75540421",
    //     "id_wallet": "48699a70-9dc4-50fe-bbe4-ef31e4a61a8b",
    //     "code": "ZEC",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "LCX Token",
    //     "id_token": "1fd23f09-07b6-54eb-a200-59b2e7f5d065",
    //     "id_wallet": "471c959d-d447-5a70-963c-591324b34599",
    //     "code": "LCX",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "SushiSwap",
    //     "id_token": "ac7c7224-ae69-5e46-8923-983b472203ea",
    //     "id_wallet": "dbc8ffcf-fe1b-570a-8052-1682b99b6cb2",
    //     "code": "SUSHI",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "USD Coin",
    //     "id_token": "2b92315d-eab7-5bef-84fa-089a131333f5",
    //     "id_wallet": "21153a61-42ba-56e9-b871-b236aba3c3fc",
    //     "code": "USDC",
    //     "type": "wallet",
    //     "amount": "0.000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Numeraire",
    //     "id_token": "30dac328-eae0-523a-835e-aef52596d0dc",
    //     "id_wallet": "c9aa54f7-8d51-5d2e-af1b-a967ab910a1b",
    //     "code": "NMR",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Orchid",
    //     "id_token": "07525606-a404-5f15-a71d-ba0e40e74eca",
    //     "id_wallet": "61baa3da-ce03-5072-80bd-85f83916e82a",
    //     "code": "OXT",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Basic Attention Token",
    //     "id_token": "b8950bef-d61b-53cd-bb66-db436f0f81bc",
    //     "id_wallet": "65b335cd-c777-5b28-8c25-6b48bab33292",
    //     "code": "BAT",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Loom Network",
    //     "id_token": "a2789fab-8116-5f06-bebb-a927afb2bce7",
    //     "id_wallet": "1d45c13d-6e12-5bec-b632-f08f1e135f6b",
    //     "code": "LOOM",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Radicle",
    //     "id_token": "aa75e77c-c936-58a2-9d3c-afb7f23886e1",
    //     "id_wallet": "4eec65ce-32a6-5f72-853d-306a0233e8a0",
    //     "code": "RAD",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Quant",
    //     "id_token": "13a06dc2-f4c7-58c1-91f0-f4ad4a867f82",
    //     "id_wallet": "2be75738-a369-5260-902a-c2fe8bd99f45",
    //     "code": "QNT",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Spell Token",
    //     "id_token": "43effdcf-ee0b-5b00-bba7-271865f42c33",
    //     "id_wallet": "61602bf4-2989-5105-a27a-44532cdb404c",
    //     "code": "SPELL",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Storj",
    //     "id_token": "a5c6ceac-9226-55a7-a2dc-59d9149083d6",
    //     "id_wallet": "1e35a90c-db7b-5f1f-a180-f80eb9fc8bbb",
    //     "code": "STORJ",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Power Ledger",
    //     "id_token": "7e7828ba-1b70-56ce-be2d-0a155c9eff82",
    //     "id_wallet": "20099a4f-4932-59ec-877f-0ed588ebc875",
    //     "code": "POWR",
    //     "type": "wallet",
    //     "amount": "0.000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Decentraland",
    //     "id_token": "66b98195-0562-586b-8cee-ee7f57923fef",
    //     "id_wallet": "8f508559-bfc6-561d-b1b7-b84775a20e04",
    //     "code": "MANA",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "yearn.finance",
    //     "id_token": "8ebe6e4d-8bd6-5be0-8dca-aaa18a188915",
    //     "id_wallet": "89930fa4-fd6e-5983-a80c-27517c9b9240",
    //     "code": "YFI",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Livepeer",
    //     "id_token": "31acd6f6-d560-5a59-b77d-f9fa57c19167",
    //     "id_wallet": "5f8aacef-5324-5dd7-bca8-4b6e96b8d2d5",
    //     "code": "LPT",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "The Graph",
    //     "id_token": "3f9b015d-387d-589b-b65d-bd6d24babc96",
    //     "id_wallet": "d3799451-a8e1-5c49-9ff0-17710b7e4c03",
    //     "code": "GRT",
    //     "type": "wallet",
    //     "amount": "9.38059129",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "SKALE",
    //     "id_token": "af2d755d-6142-57f4-a092-0aa4fe67a9b5",
    //     "id_wallet": "5cf148fb-2cdc-55ce-9f19-1a30fa5033da",
    //     "code": "SKL",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Internet Computer",
    //     "id_token": "8f0fb5e8-9924-50bd-b95c-1d4b88fd20cc",
    //     "id_wallet": "d8c809a1-75ad-5542-93cd-a5d93084db85",
    //     "code": "ICP",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Liquity",
    //     "id_token": "8943ba88-a949-5ba2-b7c0-4e30f8208bac",
    //     "id_wallet": "9ba560b9-676a-554a-ad4d-c37da5375fd6",
    //     "code": "LQTY",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "district0x",
    //     "id_token": "8dd8a49c-e75c-5c56-a353-468f6346ed93",
    //     "id_wallet": "6636b681-6563-58f1-a49c-6acd9d5af0c1",
    //     "code": "DNT",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Render Token",
    //     "id_token": "045e25f3-4756-59c0-8ef9-34b8eaa1cbfd",
    //     "id_wallet": "6b677f5c-b7a4-581a-a802-5561e122aa1b",
    //     "code": "RNDR",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Rai Reflex Index",
    //     "id_token": "8adc8071-0938-5583-b672-6033f16f2786",
    //     "id_wallet": "98212ce8-d6d7-59c1-985c-dd546b57fb6c",
    //     "code": "RAI",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Perpetual Protocol",
    //     "id_token": "830f84b1-ade4-50a7-a33e-e159e136ad45",
    //     "id_wallet": "4c2725ce-ae61-5c5a-8eac-df39e2075d6d",
    //     "code": "PERP",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Solana",
    //     "id_token": "4f039497-3af8-5bb3-951c-6df9afa9be1c",
    //     "id_wallet": "b15fb45b-5c12-52ed-8cbe-d4031f032087",
    //     "code": "SOL",
    //     "type": "wallet",
    //     "amount": "0.000000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Enjin Coin",
    //     "id_token": "46d22e0a-0201-5945-8728-fae2410951e8",
    //     "id_wallet": "0b4b8951-bd26-54b2-a7b1-1f0192a9f889",
    //     "code": "ENJ",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Mirror Protocol",
    //     "id_token": "3bd2e3bf-5923-5cc9-93df-8c23b92af4f4",
    //     "id_wallet": "0fe1bdac-045a-5f60-a6a8-b1bc4ce88ef2",
    //     "code": "MIR",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Chainlink",
    //     "id_token": "ea3107c6-416b-5b02-b99f-ded31a0cbdfe",
    //     "id_wallet": "3b954b69-d30b-5855-97ba-f9d747278db7",
    //     "code": "LINK",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Polkadot",
    //     "id_token": "ebea861a-c0ae-5323-bbe0-46893a119a39",
    //     "id_wallet": "d0216fe2-195b-51a0-9662-edb7af31e643",
    //     "code": "DOT",
    //     "type": "wallet",
    //     "amount": "0.0000000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "NuCypher",
    //     "id_token": "fafd5bfc-16d5-5173-bee1-07de3e105f11",
    //     "id_wallet": "d262e338-6888-5a9e-97ea-955fd37d33ee",
    //     "code": "NU",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Wrapped Luna",
    //     "id_token": "ecd5367c-801d-5160-8c7a-6bb5f9bb018b",
    //     "id_wallet": "090900ea-4cc9-55a2-b91f-cead72fd6a36",
    //     "code": "WLUNA",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Polyswarm",
    //     "id_token": "37b43246-7803-559e-b4b6-5ba73f137d22",
    //     "id_wallet": "e88c51cf-3a1c-5823-9374-cb359499976a",
    //     "code": "NCT",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "NKN",
    //     "id_token": "89cf59a7-afb8-574d-9e37-8ac01e374e7a",
    //     "id_wallet": "9753061c-ba23-5d04-87b4-d7fb5f20ae3c",
    //     "code": "NKN",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Gitcoin",
    //     "id_token": "19ca00b2-3058-5e4b-a84b-c84b74baed10",
    //     "id_wallet": "711a289a-882a-51b1-a128-c7c6d4a1427d",
    //     "code": "GTC",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Polkastarter",
    //     "id_token": "963d6e5a-b08c-59d9-9ed0-d616c6c5dd4b",
    //     "id_wallet": "bfbdc268-002b-5ab7-b5cf-ddd04ad137bd",
    //     "code": "POLS",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Stacks",
    //     "id_token": "25c25663-7d03-5fd5-b8fb-31aa596d5a0d",
    //     "id_wallet": "2fd25c04-0e79-57c4-b72d-a618f123c331",
    //     "code": "STX",
    //     "type": "wallet",
    //     "amount": "0.000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Dai",
    //     "id_token": "01e9e33b-d099-56fb-aa3b-76c19d0b250e",
    //     "id_wallet": "7883c027-db05-594b-b88f-e977409a5096",
    //     "code": "DAI",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Orion Protocol",
    //     "id_token": "0c275161-fb4b-50c4-926b-d4d7d093b897",
    //     "id_wallet": "d2ee00de-09ce-50b7-9862-aae984cb9955",
    //     "code": "ORN",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "SUKU",
    //     "id_token": "bfb347d2-9510-5a8f-8aed-001fd3e1131d",
    //     "id_wallet": "6726fc14-e5c2-56f6-a79a-df04d2a15995",
    //     "code": "SUKU",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Cardano",
    //     "id_token": "63062039-7afb-56ff-8e19-5e3215dc404a",
    //     "id_wallet": "2e29062f-ddd2-5a4b-9e56-d79a980cb50f",
    //     "code": "ADA",
    //     "type": "wallet",
    //     "amount": "0.000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Gala",
    //     "id_token": "fa0bd074-1230-5a14-bdd3-15f5c9600d8d",
    //     "id_wallet": "d5b9b059-48e9-5073-aee6-ff77611a4a9c",
    //     "code": "GALA",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "API3",
    //     "id_token": "4e181288-ccce-562d-8c4f-787afa655204",
    //     "id_wallet": "9d5cdea5-7cad-55b8-9c75-6f12f60d250b",
    //     "code": "API3",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Pawtocol",
    //     "id_token": "cb731aa0-c582-5f56-9701-a3c149195338",
    //     "id_wallet": "0f2acc51-a006-5be5-8a90-e0e35663cce2",
    //     "code": "UPI",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "UMA",
    //     "id_token": "003db351-767e-5656-b32d-8ce553310814",
    //     "id_wallet": "3df856a1-80a3-544a-a279-63bcbfb52a14",
    //     "code": "UMA",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "XRP",
    //     "id_token": "e17a44c8-6ea1-564f-a02c-2a9ca1d8eec4",
    //     "id_wallet": "2a8cba1d-37d4-5fb0-8cf3-5f3bc639bbe6",
    //     "code": "XRP",
    //     "type": "wallet",
    //     "amount": "0.000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "OMG Network",
    //     "id_token": "7616bfa5-9874-5680-87ef-6f04dd3a0e75",
    //     "id_wallet": "6b101fbb-d249-5312-b008-a8c9617cdbe2",
    //     "code": "OMG",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "XYO",
    //     "id_token": "36d68172-0e1b-5a94-845a-a1e4e1022b75",
    //     "id_wallet": "fe3aec14-da1c-5f65-933d-fbae3762cf52",
    //     "code": "XYO",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Rari Governance Token",
    //     "id_token": "a1548f40-bf11-5f95-a1c4-13cf8ecd8f8f",
    //     "id_wallet": "f8949ee8-3fc0-5c1e-858f-cc8e08f375e7",
    //     "code": "RGT",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "IDEX",
    //     "id_token": "a1f72e0a-bb57-5504-8ed8-d8362e543b5f",
    //     "id_wallet": "2eb8a364-0e4c-5e78-a0e9-c9762196ba20",
    //     "code": "IDEX",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Request",
    //     "id_token": "7c6cf248-e06b-5426-a05d-ac2777159a11",
    //     "id_wallet": "ae7f3629-3af9-5e49-8cbc-899e427f367c",
    //     "code": "REQ",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Rally",
    //     "id_token": "39d7d62b-c1fc-5db4-bc0e-a0465473a748",
    //     "id_wallet": "28a85a0a-35d2-505c-a81d-88b131dbf1ec",
    //     "code": "RLY",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Litecoin",
    //     "id_token": "c9c24c6e-c045-5fde-98a2-00ea7f520437",
    //     "id_wallet": "4ba11260-72a8-5fca-9bcd-2d68aa839d7d",
    //     "code": "LTC",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Mask Network",
    //     "id_token": "45ce7f01-2962-5576-8dfd-449e4a49b75d",
    //     "id_wallet": "add660fa-4746-5e41-9c25-fce21ecf7fea",
    //     "code": "MASK",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Measurable Data Token",
    //     "id_token": "76989be1-d882-599a-82ac-bb3b2e2a7db3",
    //     "id_wallet": "45b0df31-eadc-5c55-aa08-e24811bda447",
    //     "code": "MDT",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Curve DAO Token",
    //     "id_token": "48a63b4a-1024-5cbe-9132-5dcc7792487d",
    //     "id_wallet": "8ff300e4-c81b-59c5-a125-02f63be74fe9",
    //     "code": "CRV",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "OriginTrail",
    //     "id_token": "8952b259-c4e1-5947-88c2-7be991270114",
    //     "id_wallet": "6b6ff63b-885c-57f4-8153-7e28b8ab8585",
    //     "code": "TRAC",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Balancer",
    //     "id_token": "e0409f05-5a95-5abf-8082-c746da699f82",
    //     "id_wallet": "50ae1c34-46ef-51de-a5de-398561fcf715",
    //     "code": "BAL",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Dogecoin",
    //     "id_token": "d9a3edfa-1be7-589c-bd20-c034f3830b60",
    //     "id_wallet": "ea4a1d03-20a1-52c5-9431-7a734c415329",
    //     "code": "DOGE",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Harvest Finance",
    //     "id_token": "7ea0bd74-3cab-5bf8-94e2-f0c0b3896f07",
    //     "id_wallet": "97e45c24-feed-5845-91d0-7cd97f34b4a9",
    //     "code": "FARM",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Paxos Standard",
    //     "id_token": "be4a78af-d300-59b0-9c70-ba42a93caf56",
    //     "id_wallet": "578bed96-a4c8-5e3d-85a6-2c774f06850e",
    //     "code": "PAX",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Algorand",
    //     "id_token": "9220d47f-bc0a-53ad-9646-ef49918adcf3",
    //     "id_wallet": "306062cb-1cfd-56ec-bc0f-9e23a1c339c9",
    //     "code": "ALGO",
    //     "type": "wallet",
    //     "amount": "0.248902",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Unifi Protocol DAO",
    //     "id_token": "92e5ab33-c87c-540c-9fc0-8979fba25a15",
    //     "id_wallet": "fac85643-8511-59e9-a59b-0a0d6daf3a1e",
    //     "code": "UNFI",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Band Protocol",
    //     "id_token": "bf3edc12-9feb-556f-a181-ae8a25cf073b",
    //     "id_wallet": "4a174512-4e09-581c-ada8-9bffcea84dbc",
    //     "code": "BAND",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "iExec RLC",
    //     "id_token": "2a3e5cc1-7ef1-5a32-bf56-95aa79983f13",
    //     "id_wallet": "cbeb673a-d9be-596a-9032-de9672175d38",
    //     "code": "RLC",
    //     "type": "wallet",
    //     "amount": "0.000000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "MPL",
    //     "id_token": "725fefe7-2631-5cf3-8a26-8e94101c3f76",
    //     "id_wallet": "89f74b13-212f-5c3d-87bd-9fa2bf2a62d9",
    //     "code": "MPL",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Kyber Network",
    //     "id_token": "8c853af0-5071-5dd7-9f70-1a871107f53c",
    //     "id_wallet": "cef33d18-69fc-5a17-8e92-f987eb1be54a",
    //     "code": "KNC",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Inverse Finance",
    //     "id_token": "29f11294-d51f-5f60-8e8b-e5c23ca3ea22",
    //     "id_wallet": "39732778-477a-5611-8de0-bb2d28e0c9ac",
    //     "code": "INV",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "SuperFarm",
    //     "id_token": "9f1b558c-cdd3-5ffe-9d69-0e34a62e82a7",
    //     "id_wallet": "9976bcbb-5862-5fc7-9cfc-ff132e810020",
    //     "code": "SUPER",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "IoTeX",
    //     "id_token": "56f8ea19-7e6a-5e38-ac47-fc9762b955ae",
    //     "id_wallet": "5b01ed9d-b4bd-5ef8-b82e-4fd47ed34408",
    //     "code": "IOTX",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Filecoin",
    //     "id_token": "0a5b73d1-a976-5966-b3ff-86be8f9b65d5",
    //     "id_wallet": "bf175771-18d6-510c-a2dc-0ef906727cb2",
    //     "code": "FIL",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Kryll",
    //     "id_token": "015db578-d600-5613-8736-0eec500dfc4d",
    //     "id_wallet": "22374ab9-3a58-5e0f-aa6e-696cf1ba2fe1",
    //     "code": "KRL",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "GYEN",
    //     "id_token": "86dc2208-a258-5ea2-b1bc-5039d3767f5b",
    //     "id_wallet": "2b7926f9-6df4-5810-aa5a-555c744cf628",
    //     "code": "GYEN",
    //     "type": "wallet",
    //     "amount": "0.000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Wrapped Bitcoin",
    //     "id_token": "a52f80f6-c533-593a-aead-a6fc8eea643c",
    //     "id_wallet": "778101b3-d450-5277-a319-b0730dd58933",
    //     "code": "WBTC",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Ribbon Finance",
    //     "id_token": "c20d46ab-70a2-4c59-81e7-ef3a035e22a3",
    //     "id_wallet": "f0ea2419-217b-59c9-ab52-1e5a345a92a4",
    //     "code": "RBN",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Uniswap",
    //     "id_token": "412832ad-59dd-5af8-8d36-99ebda3afb80",
    //     "id_wallet": "5b2c37c9-770d-5e8b-a45b-6352ac503225",
    //     "code": "UNI",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Bancor Network Token",
    //     "id_token": "1b74d2fd-fa35-558d-a010-38d4481398c6",
    //     "id_wallet": "964222cd-6ef7-50e4-8b34-c1f123c1ab36",
    //     "code": "BNT",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Badger DAO",
    //     "id_token": "a198c9fb-15af-500b-9e48-359843aeabd0",
    //     "id_wallet": "4a6536f1-36c2-5934-a70e-9ca0ee7d5a8a",
    //     "code": "BADGER",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Enzyme",
    //     "id_token": "15cbd0cf-ac58-512f-87f7-8078fa9a3f2a",
    //     "id_wallet": "c20dc481-44e2-5a59-944b-4b31059b48ed",
    //     "code": "MLN",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "1Inch",
    //     "id_token": "484f30a6-9e06-58df-80b7-e63141e3ca0c",
    //     "id_wallet": "69a0b22e-f3bb-5c94-9b93-9691d1d56faa",
    //     "code": "1INCH",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Cartesi",
    //     "id_token": "7588d1dc-2aba-5357-85b6-6b728e85ad55",
    //     "id_wallet": "32a232dd-26a4-5979-88bc-594dfd63af04",
    //     "code": "CTSI",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "DFI.Money",
    //     "id_token": "9d5c9eca-87ec-5ad0-846c-aeae910d4a30",
    //     "id_wallet": "9ad47c36-c522-54e8-a7a9-9c307437135d",
    //     "code": "YFII",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "0x",
    //     "id_token": "a2a8f5ae-83a6-542e-9064-7d335ae8a58d",
    //     "id_wallet": "9f67e59f-d901-51d4-97b3-cf6e852b6aa6",
    //     "code": "ZRX",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Avalanche",
    //     "id_token": "9d06e463-b3ba-5abf-9082-8761846b28ab",
    //     "id_wallet": "23a0d4a5-25b9-5c0f-b3b2-489250317848",
    //     "code": "AVAX",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Bonfida",
    //     "id_token": "3a92fbde-9bb9-51ee-a994-f52c78837be5",
    //     "id_wallet": "313dbd59-2fc9-5eae-9a73-d0a20255e5a3",
    //     "code": "FIDA",
    //     "type": "wallet",
    //     "amount": "0.000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Ampleforth Governance Token",
    //     "id_token": "a9b7db60-a25f-52c3-9df8-24fdfe16de1d",
    //     "id_wallet": "2d70d750-f9aa-57e5-9e5a-b9cb806b819e",
    //     "code": "FORTH",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Assemble Protocol",
    //     "id_token": "49e1401a-48a0-58ac-881d-03ef6894a038",
    //     "id_wallet": "fc1dc0bb-33c2-50c8-a8a5-fbee80ddb6d2",
    //     "code": "ASM",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Circuits of Value",
    //     "id_token": "d8816d7a-18c3-5385-b5c6-7cc0cfef9752",
    //     "id_wallet": "860b2828-55c2-5f0f-8b5d-6d710eb49058",
    //     "code": "COVAL",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Clover",
    //     "id_token": "453639be-192e-5e36-88e3-38496e542524",
    //     "id_wallet": "c57f1113-7562-5019-b480-c9962ccba80b",
    //     "code": "CLV",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Ethereum Name Service",
    //     "id_token": "7a35374a-479b-4d5a-b0af-5824224a8743",
    //     "id_wallet": "226175de-d7d9-5876-a816-8094da724d64",
    //     "code": "ENS",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Biconomy",
    //     "id_token": "5dd73cfd-42bf-4383-8263-af3130198de6",
    //     "id_wallet": "f7df7f1f-efe9-5d72-8d95-d8d90bca774e",
    //     "code": "BICO",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Adventure Gold",
    //     "id_token": "9941a614-00ea-5d1c-bfdf-efdc4c1e58e0",
    //     "id_wallet": "5eeb6f39-4518-5a4d-a727-0584dbfab40c",
    //     "code": "AGLD",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Aave",
    //     "id_token": "b1646860-6b23-5f7d-a506-cba0902f0ca9",
    //     "id_wallet": "c4b50cb7-344d-5011-90e8-f76a5db9d317",
    //     "code": "AAVE",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "DerivaDAO",
    //     "id_token": "83cb4677-21c9-557f-9baa-969b3fee1a34",
    //     "id_wallet": "d88d3a9a-cf80-59bf-aaa6-300b7961c283",
    //     "code": "DDX",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Augur",
    //     "id_token": "b8b44189-a54b-526f-b68d-1dbb27b462c3",
    //     "id_wallet": "16354d1c-a15c-53dc-8c18-994b260a99c0",
    //     "code": "REP",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Civic",
    //     "id_token": "6b12b7ee-2295-5bd3-b4a2-fe711055d79f",
    //     "id_wallet": "6775f261-e0b4-502a-ba73-576640c2d98e",
    //     "code": "CVC",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "ARPA Chain",
    //     "id_token": "5fcaa9b6-cea0-52af-bbd4-40c8053ef49f",
    //     "id_wallet": "efea0137-3864-5e5c-b615-f134cbaae2a7",
    //     "code": "ARPA",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Cryptex Finance",
    //     "id_token": "6e8a50fb-9270-52aa-9261-86bf9fa8b2ec",
    //     "id_wallet": "9ba996ae-d109-5cb5-a75c-0249b3421b09",
    //     "code": "CTX",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Axie Infinity",
    //     "id_token": "b76225e9-3cff-5c6f-88a2-2490f70cb02e",
    //     "id_wallet": "c07bf52e-a1dd-56cd-9446-6dc48a6f357d",
    //     "code": "AXS",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Aventus",
    //     "id_token": "b0115e95-4015-5352-9931-da8f6bbf91e6",
    //     "id_wallet": "0b3141cd-6d77-55fd-87ce-6ca86ee16d53",
    //     "code": "AVT",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Alchemy Pay",
    //     "id_token": "045e4fab-f2ca-58a3-ac2b-8c47c5d23968",
    //     "id_wallet": "879c2789-aa39-5b1d-b190-7399046b3bba",
    //     "code": "ACH",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Bluezelle",
    //     "id_token": "fc728438-099c-55f2-b3bf-e50452e78157",
    //     "id_wallet": "4e309d61-6085-5559-8801-7d7007b553fd",
    //     "code": "BLZ",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Crypto.com Coin",
    //     "id_token": "2d6b2001-dd44-5f5c-bc33-ed43d3e3c8f0",
    //     "id_wallet": "1874d28e-a334-563a-be4f-8a449985342e",
    //     "code": "CRO",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Ankr",
    //     "id_token": "5d88223d-ce08-529d-b533-e318d6ba4d79",
    //     "id_wallet": "b34994dd-0d46-573b-b15b-527e790bf8fb",
    //     "code": "ANKR",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Function X",
    //     "id_token": "a2b48bde-1149-5cb7-9ddb-57563bb4d63b",
    //     "id_wallet": "08162360-410c-5715-9a85-e477e23350fc",
    //     "code": "FX",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Chiliz",
    //     "id_token": "3b6a0532-d638-58ab-b7f8-16ead09d686d",
    //     "id_wallet": "5d78a2c2-3305-57c6-8463-e3ff12792b9f",
    //     "code": "CHZ",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Braintrust Token",
    //     "id_token": "14364054-394d-5135-a4a8-526e9a8deacd",
    //     "id_wallet": "7ab77a7a-d86c-5633-9ca2-970df0c0a92f",
    //     "code": "BTRST",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "PlayDapp",
    //     "id_token": "baeb8efc-a5a6-5d8a-844c-2b95e4d09c99",
    //     "id_wallet": "7711c0e5-d8f6-5649-a29c-4cb55230e29f",
    //     "code": "PLA",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Bounce Token",
    //     "id_token": "fea50790-50ec-5460-9ea0-b5817de4d17e",
    //     "id_wallet": "77fa111f-4536-5228-b9da-d8181b0dbd19",
    //     "code": "AUCTION",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Bitcoin Cash",
    //     "id_token": "45f99e13-b522-57d7-8058-c57bf92fe7a3",
    //     "id_wallet": "644e8d82-54bf-59ef-944f-43f8b16285da",
    //     "code": "BCH",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Decentralized Social",
    //     "id_token": "bcb537fb-eccd-5ada-b482-3037177b1b00",
    //     "id_wallet": "2a85148d-a25b-5628-99e1-5c289f6b807e",
    //     "code": "DESO",
    //     "type": "wallet",
    //     "amount": "0.000000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Amp",
    //     "id_token": "f3b62870-ddd0-5dea-9d80-5190d8558461",
    //     "id_wallet": "03a66194-0d2a-5288-9da3-29581101384f",
    //     "code": "AMP",
    //     "type": "wallet",
    //     "amount": "113.70815271",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Ethereum Classic",
    //     "id_token": "c16df856-0345-5358-8a70-2a78c804e61f",
    //     "id_wallet": "28cc3e47-9b0a-593c-8278-d6b1b5e1ccdb",
    //     "code": "ETC",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Fetch.ai",
    //     "id_token": "3672ab4a-25e0-57a8-b029-99239c081958",
    //     "id_wallet": "df5603cc-959b-520b-b649-ee348bbc092e",
    //     "code": "FET",
    //     "type": "wallet",
    //     "amount": "10.60139206",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Euro",
    //     "id_token": "no-id-for-fiat",
    //     "id_wallet": "93f93bda-5886-52f3-8441-fcba0d73d268",
    //     "code": "EUR",
    //     "type": "fiat",
    //     "amount": "0.00",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Bitcoin",
    //     "id_token": "5b71fc48-3dd3-540c-809b-f8c94d0e68b5",
    //     "id_wallet": "194a8daf-e12b-5c96-84a3-16db4e361bf0",
    //     "code": "BTC",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Metal",
    //     "id_token": "40d84546-b993-5601-aef2-731bc30a2b16",
    //     "id_wallet": "MTL",
    //     "code": "MTL",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Arcblock",
    //     "id_token": "3e0240e8-b40f-5a1e-9495-1490a122d4bf",
    //     "id_wallet": "ABT",
    //     "code": "ABT",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Celer Network",
    //     "id_token": "322ae040-e3a8-52b8-a5eb-3026ed9b9f71",
    //     "id_wallet": "CELR",
    //     "code": "CELR",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "SWFTC",
    //     "id_token": "63d08c0c-c705-59d9-9cd0-927803fdff7d",
    //     "id_wallet": "SWFTC",
    //     "code": "SWFTC",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Gnosis",
    //     "id_token": "90f65914-63bf-5101-b9e7-b58bc1f42b5d",
    //     "id_wallet": "GNO",
    //     "code": "GNO",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "NEST Protocol",
    //     "id_token": "786959b7-f444-501b-a38e-016268a32b07",
    //     "id_wallet": "NEST",
    //     "code": "NEST",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "TE-FOOD",
    //     "id_token": "2497cc51-e1ef-58d1-8ed2-b5c2fe70bdea",
    //     "id_wallet": "TONE",
    //     "code": "TONE",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Coinbase ETH",
    //     "id_token": "161f5d0a-1657-4300-b072-3f9cb4d6bdad",
    //     "id_wallet": "CBETH",
    //     "code": "CBETH",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Sylo",
    //     "id_token": "934bd7e5-96c5-5acf-8c71-316545e51045",
    //     "id_wallet": "SYLO",
    //     "code": "SYLO",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Gemini Dollar",
    //     "id_token": "8b3c5910-a926-564d-a7e9-7d694bff0650",
    //     "id_wallet": "GUSD",
    //     "code": "GUSD",
    //     "type": "wallet",
    //     "amount": "0.00",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Boba Network",
    //     "id_token": "286c7042-9314-435f-936b-d708ba11a59d",
    //     "id_wallet": "BOBA",
    //     "code": "BOBA",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "League of Kingdoms Arena",
    //     "id_token": "bd07f41c-1cc2-4d51-8fa6-d3c957ca0370",
    //     "id_wallet": "LOKA",
    //     "code": "LOKA",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "SuperRare",
    //     "id_token": "431d70b2-be25-551b-83f9-a61e90b5d892",
    //     "id_wallet": "RARE",
    //     "code": "RARE",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // },
    // {
    //     "name": "Stargate Finance",
    //     "id_token": "dc8930f5-133d-4265-91d5-9e5d2d453013",
    //     "id_wallet": "STG",
    //     "code": "STG",
    //     "type": "wallet",
    //     "amount": "0.00000000",
    //     "updated_at": 1661413631131
    // }
];


// module.exports = {
//     tokenList
// }

