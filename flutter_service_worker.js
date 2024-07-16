'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "1876267d778017f72d4ab51ea4c3b5ea",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4df46debde559956dd5bb99b30f99944",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ec841f54d2637c7b25d19706b03d204a",
".git/logs/refs/heads/main": "bed1ec240e9d34b4a33e5131c4155978",
".git/logs/refs/remotes/origin/main": "51df6cd80532dd7c4ad5cf5c9721d88b",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/4028a09d47776edd4dfbbbb13f9e74a8af1abd": "0b7e3e8400f47e31ec16daa6bf508bac",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0a/b504a7011ee4f104561e225cb5306673903873": "03d4767e57d92058bd53db29a4079ff5",
".git/objects/0c/e2b441a78e67194ac132ab92bfd83696be50a7": "0affac0f6e5568a64de642036623294d",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/11/1ee00656b606b5f6052f4e1f473dda63ff92fb": "c76cd967bd112c38725e56c4b5556c08",
".git/objects/14/8b11db7b60ffe26abc1cd116d6dd7c376f1bd2": "f2f92e3f4bfc557686eba4eeda7b2041",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/057a2bf7ab4bbc33ab2c291ecb29becf0086cd": "951b55187715cd1be96f9d5be8e04450",
".git/objects/18/bf06b9448d754cf90e41cab4402e28ab1be3a3": "d8c36ccc1da01c27e2b97a965ae76879",
".git/objects/1c/fa6a01fd6e12efd0baa24a866f9a185e02cb00": "88accc121d1b420e87bd06f12eab2ead",
".git/objects/1e/8f4d519d9364d553c4df4d67c7363a458b2af2": "89c7f54ecd441c53efe942661517e093",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/1567d732ef796d556505dfa7dbbb9ff31b7cb6": "84b8bfe8a50644f50601d381407e4be7",
".git/objects/26/4a0df744dd63d093475a3c8a22f10cd1d4312a": "47d037ceeaf0a95d396e1df9737306c5",
".git/objects/27/3de3e2e403e82da3f1bc37f4ceabd10d3ca9a2": "18eb19b02f8fba34cdca23478f746c9a",
".git/objects/2b/ae8d6bc672b9f55f57c0a202d6cef0777fa9de": "9e608ec505f86d1d74da50b7620fc93f",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/056f83254921f41ac99f36d3a91793d981b559": "6fb91921eae5f1a4f17e144b8113ad63",
".git/objects/2e/96c283e7ef9611e16259bd58393dc3b45d401c": "50a41051331273d61e7bf20cbd67cdf9",
".git/objects/33/c561a5844db570d1d9f0ee1181f0fffdfdc30d": "4dcf7469671947e13857f515886089fd",
".git/objects/35/66557631bf0154a30fe54aebf1563782abe33d": "972e8bc63d1f4860fba36afb6c592c14",
".git/objects/36/cdea30f7405153f78fbb9bc9115731b17c68c0": "4bd5ee5601639ad411f77068e5d50783",
".git/objects/36/fdfad18a86aa864de0d4ba612713dd2bc7895c": "6583c275762595e293255027607ee4f5",
".git/objects/38/95026f3165494a5a4f54e9a01c9b936c8f5013": "682997106671ab11501b0afae5c8dba3",
".git/objects/3a/1bc88b52bbcf8ba03af8898f5dbe271c7cb291": "d4ad4c2ba31cf6736d8f9707518c6784",
".git/objects/3a/4ef5683d5f55f50f432eb6bc82b2af48f8d331": "7c9dc2018b1ccd24ff4b9778e47151da",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/6be34f2240f4ef05ad2f17cc89ee02b4005cff": "b3f2cfdacf36a172e37d7db4447ebe92",
".git/objects/42/f2a1c282335959a7666826109c9f9d4a32fca6": "16b51362bffeb0878a8ac9cda63389e4",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/01abea97d20c045f475ac0a61a673c2ec2da77": "af6892ce95db5bdbb5471b4e5ca75968",
".git/objects/46/373db31ced20e503ba4c4e52735de67a717005": "195244cbd96944d20ba76cd2fb8d9ce3",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/7c8b5db9b8dad59d7a4b893fd208b7e85b86e1": "0c7f0aaedbb7a11be680c81d8a9143b5",
".git/objects/57/9ee2350ee2ff7b85947b2c259af9099755d941": "aaab48fe91a646d88b21d98c03437d46",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5d/037e7cc35cdc5304fb05a5ddd95ab6176dee6f": "2472aed9d150a95eb64313c96efb162e",
".git/objects/5d/5b189d1de6b446d15498fb13e1c293b5a97d76": "e88721d0e1b96d5c10f31b2d1f65a30e",
".git/objects/60/de866c8576b268a041013c48a02bd6077223d1": "dd2b769f8d8794d09c25265c314dba6f",
".git/objects/64/8c1795dee5c328e85b8eec47459ace6c6b3afc": "a062775540eed7e810765a8d0e06a493",
".git/objects/69/4c98cc1b495b3757eaa743bc1fe7a670f4068c": "5913d11f7c86e55cccf87abf0502946a",
".git/objects/69/6cf23de647e2765c22041cc0ca0307d8df4962": "3f10eed75ae9b32d56d30fdc0e72de6e",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/a1341afb018a04829ec5b08bffbba853524a15": "d706c5a9fe7ff368ca920b28e7334e80",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/c19212d49d409549ffc78d2e4ba04593831923": "9077c14e06b072cf7824a95d12dc3550",
".git/objects/72/bd2ed7fd3da448ff535261c512c784ee9b433e": "db3348cba4af3dfbf53bb80bda689567",
".git/objects/73/e8e873a78113931608cb67962e05f44de97abb": "a4bad04d5ca0e6cc5e485248c8e40097",
".git/objects/75/e2e038ed3bbc1661c4785f6956ff9c2c8194da": "9148439948d25810fb3d270b2d56e9e6",
".git/objects/76/dd5c71d73fb0c63c7a0fa4495b6d60fd317dd3": "36f66e0df344f164a51c24fd371a3b01",
".git/objects/7a/a56b1f20f5fa08d416aaa6eb3fc25c15ed08d8": "f881f680205fdf6d1444b47b50195225",
".git/objects/7c/b3414e961c6e48fa85a48a926d26cbce5ac103": "46051b1ce92868057080088abea8bddf",
".git/objects/7e/81035b50f5074bf4b2487dba502c05036498bf": "1413f7f663904359e7265f886080b298",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/85/a9482ec7ad5e35f78292b30ed91e7186579a3b": "5464a71b60861a4e77abd272ed4b6742",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/433307a24b4685155beaad08dd023a9a3ca1d0": "0fe3934f479fe5ac45047a6cf095589c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/45a89d8968ec05cc6eeca3d4cd298af022f76d": "90c23c3ebf2475333baa899e49e7f4e4",
".git/objects/98/16605066c3151a405a22bc19345967b68cd5bc": "70a7c6f1a0d52bab3da90315300d9ed8",
".git/objects/9b/7a20127bcfaccd3abdbfe6c8e06b2cc72e656a": "fb778d1e8db58b1d264ef2f547dd15ba",
".git/objects/9f/095a466b7187b50c0071e8d4943dc072fe9c26": "676a9754c865e123b0c1d2bfc7106751",
".git/objects/a0/3117bd4b6c60bbda272843f5ab957901b79f0b": "af5e857aa894a835593d6dbf304dfd85",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a3/74eca304216ff41545758e69932832806757e9": "e81a8488b6d9ef1ae6c212816d552755",
".git/objects/a8/c6daa55780664dc78e6be9627e59651b439093": "39406c183cd48076a0c1d04b1dd43e4d",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ab/9e3678d0c9e2e17c7744321456c5bd0960c6b2": "a5f0818fb579a8ab650d7bc65d52844b",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/af/c62dc73b0190bb58e54c5af995126332b53499": "072784e2c54565f938c7f2c6f5b3a427",
".git/objects/b1/70a6df38172e45dcb561432b691f92435fe4c0": "bbeca0eac4b19996fb46014d4bc58407",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/be/bb8f5f37d1b3f4d282870c3fce91182f450824": "badb3274a35bb7e75b42c227010572af",
".git/objects/c1/e76c0b5f81eb15ab9d5908d4a3b903b22b35b0": "ed41af3cb29c0e4c90d70815cdb65dcb",
".git/objects/c2/b77631a66c2a09a20d67f79416c5c06c215d9e": "52af327b567f683dbf09521dd37a7c5a",
".git/objects/c5/16376834e67587e093d01c04955c3729a89fc1": "fbf6522e19ad061011c886d3b058fdc6",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/a23e80c21c5a2372566a2966911c12209d7a49": "5786c10ef5a2700d3dd40abe69d8a93a",
".git/objects/cd/71e992ccea42b2a18e1eeafbf9e4b629b2b37c": "784f7728e10b0a6c6ffb924fcc46ea5a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/627ee09a49494af40e64cc3625ca760b526e98": "022caf689ec6c24b62198a00e862573e",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/db/a73c13515ed204ed687aa554488135e0c4eea9": "121913ffffefc779217e6c686fcc1ab1",
".git/objects/de/9f51384ddbc9b54639da91451f61ca4423b10d": "b47fc7cd6d2ee519779cd0870d1849dc",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/8c5436e54228c5a0e3f348c0c12a185316a0ba": "63f1ea68aab5dc5bba80696b3d66efb4",
".git/objects/ea/ef5a759bdff64694438700b9002c16e4fecd96": "33002984d03483aad60539caf9a6bc29",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
".git/objects/ed/b540138501f7739b13315194fd00572711193d": "513da74de213a4c845fe010fda93c2d0",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/f1/0da0f6cc93b2db2a5b66024e9b16064ea76ea5": "9a539ea2b12bd51fcb839d697c307d0d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/046b88285db28a34162c27abea3b33dbe4aeed": "392811d805335a33a2bcc48dd65218bc",
".git/objects/f7/bfd25ef13310431733dc2453e5aed4f770a76a": "08955bed9c17bcb2efd772c28bdc8ac6",
".git/objects/fe/269dac06cb2eddfb6434385e1d5b5941ce0849": "67b1e0f3e93a8a8ec570b19b96db7cad",
".git/objects/fe/d8fb3901d88f76e35f7bb7a9847e123bdf2d0f": "a426d40b4310de9102c89b7f5f595f49",
".git/objects/ff/a04af7377901be9034b15b88fffae5bb27d05d": "63f525c95575bed309eccd866a096c7b",
".git/refs/heads/main": "92186e0f37108e29592b81845a60ebd4",
".git/refs/remotes/origin/main": "92186e0f37108e29592b81845a60ebd4",
"assets/AssetManifest.bin": "4da78caf404b3085784aeb18879e67cb",
"assets/AssetManifest.bin.json": "60324410d726dde5d903c08beee4535a",
"assets/AssetManifest.json": "d6c8cf60cd1aebecc2935cc0b9837261",
"assets/assets/backgrounds/cash_back_background.png": "b9ddadafda77ca9b1fcc2a50011abdbb",
"assets/assets/backgrounds/task_manager_background.png": "e578f7ceb665723e60cc988ca2d8f2d2",
"assets/assets/icons/behance.svg": "1487dff57f5c15131037cb6965a4d0bf",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/assets/icons/dribble.svg": "cf842513f50591eb280695ad14bfa409",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"assets/assets/icons/linkedin.svg": "2f5e837978e8a6bb595dfd11c8dbd42f",
"assets/assets/icons/twitter.svg": "c09d9f98cb67b0dfc2aa4c63170f2632",
"assets/assets/images/alarm.jpg": "7f8f2e55f5f47deaf440b3be64ca15d7",
"assets/assets/images/car.png": "ae3e0dda1da997a4e0ccd5cf1a25d2cd",
"assets/assets/images/cash_back1.png": "fb0754da1cf969a26197cdd2a4049836",
"assets/assets/images/cash_back2.png": "b97ffe66f988b18de942a30c2eab3998",
"assets/assets/images/cash_back3.png": "7246fa160b4ec8dfb16433b29267dd45",
"assets/assets/images/chat.png": "489b7f6246ce741be85ca0d551e9d07b",
"assets/assets/images/coffee.png": "0a3380640f0eb6e36b694dafb7fe8e97",
"assets/assets/images/cui.png": "287f9787968f5df14897e9066c22a388",
"assets/assets/images/doctor.png": "b7a983fb5bf36114133c169f66bbfef7",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/myImage.png": "513f2507f7efbc9e74ea7abdd9f6a9d2",
"assets/assets/images/player.png": "612730c3861b2af0a0ae161ac8a72345",
"assets/assets/images/profil.jpg": "478e5909b36b3af7d982ca93c0d87dc5",
"assets/assets/images/profile.png": "1d35475ce4996f70c2bce6dc8607d077",
"assets/assets/images/recipe.png": "47c72988f9bb6d301948ac38877b231c",
"assets/assets/images/task.png": "62d6be2ebaef80434b114eacd9102a52",
"assets/assets/images/task_manager1.png": "1376c664d72a44cd30830dffa10399c5",
"assets/assets/images/task_manager2.png": "294564d17279b60c5a57a6c7e90d52ad",
"assets/assets/images/task_manager3.png": "f16d8b69921d4ee5b289c38d89eaa7e5",
"assets/assets/images/triange_icon.png": "086ab5ca50d3e558e3307ff009975083",
"assets/assets/project_images/cash_back1.png": "4fdef689ad311f247f87f36f8cc5128a",
"assets/assets/project_images/cash_back2.png": "b01cdd3cd1fa124ab82f3b79a84f0cff",
"assets/assets/project_images/cash_back3.png": "ebc18e5bcc850465a4da26332c2f6f65",
"assets/assets/project_images/task_manager1.png": "2d7832ff8f97ba5763d825cd140f4e7f",
"assets/assets/project_images/task_manager2.png": "d9f0122eb5d5411beb41e50304e7f41d",
"assets/assets/project_images/task_manager3.png": "07fd725c27b1535e2bfa4189a6eac74d",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "075318de814f0f7278d631bc9704ea7d",
"assets/NOTICES": "49e0f1493a7d6d7cd7638f609f857bc5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4ef9893efa01cfda3949bb8a030ea494",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "e5a0922085b8ff37f71dc26d6529d837",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "67d1e82ca459f400adea48b48807df21",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "3b08f17bc3ffb4031404fa8f2fb7fb2b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f6cacac2af712cbab06a089d7137185a",
"/": "f6cacac2af712cbab06a089d7137185a",
"main.dart.js": "d447e89f34425ebad46e6d4e364808da",
"manifest.json": "30a6ea85f38555c77870a57aeabe8211",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
