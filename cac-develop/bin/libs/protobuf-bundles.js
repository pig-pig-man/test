var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.bol = (function() {

    /**
     * Namespace bol.
     * @exports bol
     * @namespace
     */
    var bol = {};

    bol.ReqGetOutOfService = (function() {

        /**
         * Properties of a ReqGetOutOfService.
         * @memberof bol
         * @interface IReqGetOutOfService
         */

        /**
         * Constructs a new ReqGetOutOfService.
         * @memberof bol
         * @classdesc Represents a ReqGetOutOfService.
         * @implements IReqGetOutOfService
         * @constructor
         * @param {bol.IReqGetOutOfService=} [properties] Properties to set
         */
        function ReqGetOutOfService(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReqGetOutOfService instance using the specified properties.
         * @function create
         * @memberof bol.ReqGetOutOfService
         * @static
         * @param {bol.IReqGetOutOfService=} [properties] Properties to set
         * @returns {bol.ReqGetOutOfService} ReqGetOutOfService instance
         */
        ReqGetOutOfService.create = function create(properties) {
            return new ReqGetOutOfService(properties);
        };

        /**
         * Encodes the specified ReqGetOutOfService message. Does not implicitly {@link bol.ReqGetOutOfService.verify|verify} messages.
         * @function encode
         * @memberof bol.ReqGetOutOfService
         * @static
         * @param {bol.IReqGetOutOfService} message ReqGetOutOfService message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqGetOutOfService.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ReqGetOutOfService message, length delimited. Does not implicitly {@link bol.ReqGetOutOfService.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.ReqGetOutOfService
         * @static
         * @param {bol.IReqGetOutOfService} message ReqGetOutOfService message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqGetOutOfService.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqGetOutOfService message from the specified reader or buffer.
         * @function decode
         * @memberof bol.ReqGetOutOfService
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.ReqGetOutOfService} ReqGetOutOfService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqGetOutOfService.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.ReqGetOutOfService();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqGetOutOfService message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.ReqGetOutOfService
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.ReqGetOutOfService} ReqGetOutOfService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqGetOutOfService.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqGetOutOfService message.
         * @function verify
         * @memberof bol.ReqGetOutOfService
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqGetOutOfService.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ReqGetOutOfService message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.ReqGetOutOfService
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.ReqGetOutOfService} ReqGetOutOfService
         */
        ReqGetOutOfService.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.ReqGetOutOfService)
                return object;
            return new $root.bol.ReqGetOutOfService();
        };

        /**
         * Creates a plain object from a ReqGetOutOfService message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.ReqGetOutOfService
         * @static
         * @param {bol.ReqGetOutOfService} message ReqGetOutOfService
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqGetOutOfService.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ReqGetOutOfService to JSON.
         * @function toJSON
         * @memberof bol.ReqGetOutOfService
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqGetOutOfService.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqGetOutOfService;
    })();

    bol.RespGetOutOfService = (function() {

        /**
         * Properties of a RespGetOutOfService.
         * @memberof bol
         * @interface IRespGetOutOfService
         * @property {number} ret RespGetOutOfService ret
         * @property {string|null} [notice] RespGetOutOfService notice
         */

        /**
         * Constructs a new RespGetOutOfService.
         * @memberof bol
         * @classdesc Represents a RespGetOutOfService.
         * @implements IRespGetOutOfService
         * @constructor
         * @param {bol.IRespGetOutOfService=} [properties] Properties to set
         */
        function RespGetOutOfService(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespGetOutOfService ret.
         * @member {number} ret
         * @memberof bol.RespGetOutOfService
         * @instance
         */
        RespGetOutOfService.prototype.ret = 0;

        /**
         * RespGetOutOfService notice.
         * @member {string} notice
         * @memberof bol.RespGetOutOfService
         * @instance
         */
        RespGetOutOfService.prototype.notice = "";

        /**
         * Creates a new RespGetOutOfService instance using the specified properties.
         * @function create
         * @memberof bol.RespGetOutOfService
         * @static
         * @param {bol.IRespGetOutOfService=} [properties] Properties to set
         * @returns {bol.RespGetOutOfService} RespGetOutOfService instance
         */
        RespGetOutOfService.create = function create(properties) {
            return new RespGetOutOfService(properties);
        };

        /**
         * Encodes the specified RespGetOutOfService message. Does not implicitly {@link bol.RespGetOutOfService.verify|verify} messages.
         * @function encode
         * @memberof bol.RespGetOutOfService
         * @static
         * @param {bol.IRespGetOutOfService} message RespGetOutOfService message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespGetOutOfService.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
            if (message.notice != null && message.hasOwnProperty("notice"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.notice);
            return writer;
        };

        /**
         * Encodes the specified RespGetOutOfService message, length delimited. Does not implicitly {@link bol.RespGetOutOfService.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.RespGetOutOfService
         * @static
         * @param {bol.IRespGetOutOfService} message RespGetOutOfService message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespGetOutOfService.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespGetOutOfService message from the specified reader or buffer.
         * @function decode
         * @memberof bol.RespGetOutOfService
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.RespGetOutOfService} RespGetOutOfService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespGetOutOfService.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.RespGetOutOfService();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ret = reader.int32();
                    break;
                case 2:
                    message.notice = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ret"))
                throw $util.ProtocolError("missing required 'ret'", { instance: message });
            return message;
        };

        /**
         * Decodes a RespGetOutOfService message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.RespGetOutOfService
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.RespGetOutOfService} RespGetOutOfService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespGetOutOfService.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespGetOutOfService message.
         * @function verify
         * @memberof bol.RespGetOutOfService
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespGetOutOfService.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ret))
                return "ret: integer expected";
            if (message.notice != null && message.hasOwnProperty("notice"))
                if (!$util.isString(message.notice))
                    return "notice: string expected";
            return null;
        };

        /**
         * Creates a RespGetOutOfService message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.RespGetOutOfService
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.RespGetOutOfService} RespGetOutOfService
         */
        RespGetOutOfService.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.RespGetOutOfService)
                return object;
            var message = new $root.bol.RespGetOutOfService();
            if (object.ret != null)
                message.ret = object.ret | 0;
            if (object.notice != null)
                message.notice = String(object.notice);
            return message;
        };

        /**
         * Creates a plain object from a RespGetOutOfService message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.RespGetOutOfService
         * @static
         * @param {bol.RespGetOutOfService} message RespGetOutOfService
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespGetOutOfService.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ret = 0;
                object.notice = "";
            }
            if (message.ret != null && message.hasOwnProperty("ret"))
                object.ret = message.ret;
            if (message.notice != null && message.hasOwnProperty("notice"))
                object.notice = message.notice;
            return object;
        };

        /**
         * Converts this RespGetOutOfService to JSON.
         * @function toJSON
         * @memberof bol.RespGetOutOfService
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespGetOutOfService.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespGetOutOfService;
    })();

    bol.ReqAccountLogin = (function() {

        /**
         * Properties of a ReqAccountLogin.
         * @memberof bol
         * @interface IReqAccountLogin
         * @property {string} account ReqAccountLogin account
         * @property {string} password ReqAccountLogin password
         * @property {string|null} [nickname] ReqAccountLogin nickname
         * @property {string|null} [headimgurl] ReqAccountLogin headimgurl
         * @property {string|null} [sex] ReqAccountLogin sex
         * @property {string|null} [platid] ReqAccountLogin platid
         * @property {string|null} [inviter] ReqAccountLogin inviter
         * @property {Array.<string>|null} [openids] ReqAccountLogin openids
         */

        /**
         * Constructs a new ReqAccountLogin.
         * @memberof bol
         * @classdesc Represents a ReqAccountLogin.
         * @implements IReqAccountLogin
         * @constructor
         * @param {bol.IReqAccountLogin=} [properties] Properties to set
         */
        function ReqAccountLogin(properties) {
            this.openids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAccountLogin account.
         * @member {string} account
         * @memberof bol.ReqAccountLogin
         * @instance
         */
        ReqAccountLogin.prototype.account = "";

        /**
         * ReqAccountLogin password.
         * @member {string} password
         * @memberof bol.ReqAccountLogin
         * @instance
         */
        ReqAccountLogin.prototype.password = "";

        /**
         * ReqAccountLogin nickname.
         * @member {string} nickname
         * @memberof bol.ReqAccountLogin
         * @instance
         */
        ReqAccountLogin.prototype.nickname = "";

        /**
         * ReqAccountLogin headimgurl.
         * @member {string} headimgurl
         * @memberof bol.ReqAccountLogin
         * @instance
         */
        ReqAccountLogin.prototype.headimgurl = "";

        /**
         * ReqAccountLogin sex.
         * @member {string} sex
         * @memberof bol.ReqAccountLogin
         * @instance
         */
        ReqAccountLogin.prototype.sex = "";

        /**
         * ReqAccountLogin platid.
         * @member {string} platid
         * @memberof bol.ReqAccountLogin
         * @instance
         */
        ReqAccountLogin.prototype.platid = "";

        /**
         * ReqAccountLogin inviter.
         * @member {string} inviter
         * @memberof bol.ReqAccountLogin
         * @instance
         */
        ReqAccountLogin.prototype.inviter = "";

        /**
         * ReqAccountLogin openids.
         * @member {Array.<string>} openids
         * @memberof bol.ReqAccountLogin
         * @instance
         */
        ReqAccountLogin.prototype.openids = $util.emptyArray;

        /**
         * Creates a new ReqAccountLogin instance using the specified properties.
         * @function create
         * @memberof bol.ReqAccountLogin
         * @static
         * @param {bol.IReqAccountLogin=} [properties] Properties to set
         * @returns {bol.ReqAccountLogin} ReqAccountLogin instance
         */
        ReqAccountLogin.create = function create(properties) {
            return new ReqAccountLogin(properties);
        };

        /**
         * Encodes the specified ReqAccountLogin message. Does not implicitly {@link bol.ReqAccountLogin.verify|verify} messages.
         * @function encode
         * @memberof bol.ReqAccountLogin
         * @static
         * @param {bol.IReqAccountLogin} message ReqAccountLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAccountLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
            if (message.headimgurl != null && message.hasOwnProperty("headimgurl"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.headimgurl);
            if (message.sex != null && message.hasOwnProperty("sex"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.sex);
            if (message.platid != null && message.hasOwnProperty("platid"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.platid);
            if (message.inviter != null && message.hasOwnProperty("inviter"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.inviter);
            if (message.openids != null && message.openids.length)
                for (var i = 0; i < message.openids.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.openids[i]);
            return writer;
        };

        /**
         * Encodes the specified ReqAccountLogin message, length delimited. Does not implicitly {@link bol.ReqAccountLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.ReqAccountLogin
         * @static
         * @param {bol.IReqAccountLogin} message ReqAccountLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAccountLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqAccountLogin message from the specified reader or buffer.
         * @function decode
         * @memberof bol.ReqAccountLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.ReqAccountLogin} ReqAccountLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAccountLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.ReqAccountLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                case 3:
                    message.nickname = reader.string();
                    break;
                case 4:
                    message.headimgurl = reader.string();
                    break;
                case 5:
                    message.sex = reader.string();
                    break;
                case 6:
                    message.platid = reader.string();
                    break;
                case 7:
                    message.inviter = reader.string();
                    break;
                case 8:
                    if (!(message.openids && message.openids.length))
                        message.openids = [];
                    message.openids.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("account"))
                throw $util.ProtocolError("missing required 'account'", { instance: message });
            if (!message.hasOwnProperty("password"))
                throw $util.ProtocolError("missing required 'password'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqAccountLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.ReqAccountLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.ReqAccountLogin} ReqAccountLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAccountLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqAccountLogin message.
         * @function verify
         * @memberof bol.ReqAccountLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqAccountLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.account))
                return "account: string expected";
            if (!$util.isString(message.password))
                return "password: string expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.headimgurl != null && message.hasOwnProperty("headimgurl"))
                if (!$util.isString(message.headimgurl))
                    return "headimgurl: string expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isString(message.sex))
                    return "sex: string expected";
            if (message.platid != null && message.hasOwnProperty("platid"))
                if (!$util.isString(message.platid))
                    return "platid: string expected";
            if (message.inviter != null && message.hasOwnProperty("inviter"))
                if (!$util.isString(message.inviter))
                    return "inviter: string expected";
            if (message.openids != null && message.hasOwnProperty("openids")) {
                if (!Array.isArray(message.openids))
                    return "openids: array expected";
                for (var i = 0; i < message.openids.length; ++i)
                    if (!$util.isString(message.openids[i]))
                        return "openids: string[] expected";
            }
            return null;
        };

        /**
         * Creates a ReqAccountLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.ReqAccountLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.ReqAccountLogin} ReqAccountLogin
         */
        ReqAccountLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.ReqAccountLogin)
                return object;
            var message = new $root.bol.ReqAccountLogin();
            if (object.account != null)
                message.account = String(object.account);
            if (object.password != null)
                message.password = String(object.password);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.headimgurl != null)
                message.headimgurl = String(object.headimgurl);
            if (object.sex != null)
                message.sex = String(object.sex);
            if (object.platid != null)
                message.platid = String(object.platid);
            if (object.inviter != null)
                message.inviter = String(object.inviter);
            if (object.openids) {
                if (!Array.isArray(object.openids))
                    throw TypeError(".bol.ReqAccountLogin.openids: array expected");
                message.openids = [];
                for (var i = 0; i < object.openids.length; ++i)
                    message.openids[i] = String(object.openids[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReqAccountLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.ReqAccountLogin
         * @static
         * @param {bol.ReqAccountLogin} message ReqAccountLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqAccountLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.openids = [];
            if (options.defaults) {
                object.account = "";
                object.password = "";
                object.nickname = "";
                object.headimgurl = "";
                object.sex = "";
                object.platid = "";
                object.inviter = "";
            }
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.headimgurl != null && message.hasOwnProperty("headimgurl"))
                object.headimgurl = message.headimgurl;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.platid != null && message.hasOwnProperty("platid"))
                object.platid = message.platid;
            if (message.inviter != null && message.hasOwnProperty("inviter"))
                object.inviter = message.inviter;
            if (message.openids && message.openids.length) {
                object.openids = [];
                for (var j = 0; j < message.openids.length; ++j)
                    object.openids[j] = message.openids[j];
            }
            return object;
        };

        /**
         * Converts this ReqAccountLogin to JSON.
         * @function toJSON
         * @memberof bol.ReqAccountLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqAccountLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqAccountLogin;
    })();

    bol.RespAccountLogin = (function() {

        /**
         * Properties of a RespAccountLogin.
         * @memberof bol
         * @interface IRespAccountLogin
         * @property {number} ret RespAccountLogin ret
         * @property {number|null} [playerid] RespAccountLogin playerid
         * @property {number|null} [key] RespAccountLogin key
         * @property {string|null} [gate] RespAccountLogin gate
         */

        /**
         * Constructs a new RespAccountLogin.
         * @memberof bol
         * @classdesc Represents a RespAccountLogin.
         * @implements IRespAccountLogin
         * @constructor
         * @param {bol.IRespAccountLogin=} [properties] Properties to set
         */
        function RespAccountLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespAccountLogin ret.
         * @member {number} ret
         * @memberof bol.RespAccountLogin
         * @instance
         */
        RespAccountLogin.prototype.ret = 0;

        /**
         * RespAccountLogin playerid.
         * @member {number} playerid
         * @memberof bol.RespAccountLogin
         * @instance
         */
        RespAccountLogin.prototype.playerid = 0;

        /**
         * RespAccountLogin key.
         * @member {number} key
         * @memberof bol.RespAccountLogin
         * @instance
         */
        RespAccountLogin.prototype.key = 0;

        /**
         * RespAccountLogin gate.
         * @member {string} gate
         * @memberof bol.RespAccountLogin
         * @instance
         */
        RespAccountLogin.prototype.gate = "";

        /**
         * Creates a new RespAccountLogin instance using the specified properties.
         * @function create
         * @memberof bol.RespAccountLogin
         * @static
         * @param {bol.IRespAccountLogin=} [properties] Properties to set
         * @returns {bol.RespAccountLogin} RespAccountLogin instance
         */
        RespAccountLogin.create = function create(properties) {
            return new RespAccountLogin(properties);
        };

        /**
         * Encodes the specified RespAccountLogin message. Does not implicitly {@link bol.RespAccountLogin.verify|verify} messages.
         * @function encode
         * @memberof bol.RespAccountLogin
         * @static
         * @param {bol.IRespAccountLogin} message RespAccountLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespAccountLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
            if (message.playerid != null && message.hasOwnProperty("playerid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.playerid);
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.key);
            if (message.gate != null && message.hasOwnProperty("gate"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.gate);
            return writer;
        };

        /**
         * Encodes the specified RespAccountLogin message, length delimited. Does not implicitly {@link bol.RespAccountLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.RespAccountLogin
         * @static
         * @param {bol.IRespAccountLogin} message RespAccountLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespAccountLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespAccountLogin message from the specified reader or buffer.
         * @function decode
         * @memberof bol.RespAccountLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.RespAccountLogin} RespAccountLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespAccountLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.RespAccountLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ret = reader.int32();
                    break;
                case 2:
                    message.playerid = reader.int32();
                    break;
                case 3:
                    message.key = reader.int32();
                    break;
                case 4:
                    message.gate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ret"))
                throw $util.ProtocolError("missing required 'ret'", { instance: message });
            return message;
        };

        /**
         * Decodes a RespAccountLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.RespAccountLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.RespAccountLogin} RespAccountLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespAccountLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespAccountLogin message.
         * @function verify
         * @memberof bol.RespAccountLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespAccountLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ret))
                return "ret: integer expected";
            if (message.playerid != null && message.hasOwnProperty("playerid"))
                if (!$util.isInteger(message.playerid))
                    return "playerid: integer expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isInteger(message.key))
                    return "key: integer expected";
            if (message.gate != null && message.hasOwnProperty("gate"))
                if (!$util.isString(message.gate))
                    return "gate: string expected";
            return null;
        };

        /**
         * Creates a RespAccountLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.RespAccountLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.RespAccountLogin} RespAccountLogin
         */
        RespAccountLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.RespAccountLogin)
                return object;
            var message = new $root.bol.RespAccountLogin();
            if (object.ret != null)
                message.ret = object.ret | 0;
            if (object.playerid != null)
                message.playerid = object.playerid | 0;
            if (object.key != null)
                message.key = object.key | 0;
            if (object.gate != null)
                message.gate = String(object.gate);
            return message;
        };

        /**
         * Creates a plain object from a RespAccountLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.RespAccountLogin
         * @static
         * @param {bol.RespAccountLogin} message RespAccountLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespAccountLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ret = 0;
                object.playerid = 0;
                object.key = 0;
                object.gate = "";
            }
            if (message.ret != null && message.hasOwnProperty("ret"))
                object.ret = message.ret;
            if (message.playerid != null && message.hasOwnProperty("playerid"))
                object.playerid = message.playerid;
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.gate != null && message.hasOwnProperty("gate"))
                object.gate = message.gate;
            return object;
        };

        /**
         * Converts this RespAccountLogin to JSON.
         * @function toJSON
         * @memberof bol.RespAccountLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespAccountLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespAccountLogin;
    })();

    bol.ReqRegisterAccount = (function() {

        /**
         * Properties of a ReqRegisterAccount.
         * @memberof bol
         * @interface IReqRegisterAccount
         * @property {string} account ReqRegisterAccount account
         * @property {string} password ReqRegisterAccount password
         */

        /**
         * Constructs a new ReqRegisterAccount.
         * @memberof bol
         * @classdesc Represents a ReqRegisterAccount.
         * @implements IReqRegisterAccount
         * @constructor
         * @param {bol.IReqRegisterAccount=} [properties] Properties to set
         */
        function ReqRegisterAccount(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqRegisterAccount account.
         * @member {string} account
         * @memberof bol.ReqRegisterAccount
         * @instance
         */
        ReqRegisterAccount.prototype.account = "";

        /**
         * ReqRegisterAccount password.
         * @member {string} password
         * @memberof bol.ReqRegisterAccount
         * @instance
         */
        ReqRegisterAccount.prototype.password = "";

        /**
         * Creates a new ReqRegisterAccount instance using the specified properties.
         * @function create
         * @memberof bol.ReqRegisterAccount
         * @static
         * @param {bol.IReqRegisterAccount=} [properties] Properties to set
         * @returns {bol.ReqRegisterAccount} ReqRegisterAccount instance
         */
        ReqRegisterAccount.create = function create(properties) {
            return new ReqRegisterAccount(properties);
        };

        /**
         * Encodes the specified ReqRegisterAccount message. Does not implicitly {@link bol.ReqRegisterAccount.verify|verify} messages.
         * @function encode
         * @memberof bol.ReqRegisterAccount
         * @static
         * @param {bol.IReqRegisterAccount} message ReqRegisterAccount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqRegisterAccount.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified ReqRegisterAccount message, length delimited. Does not implicitly {@link bol.ReqRegisterAccount.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.ReqRegisterAccount
         * @static
         * @param {bol.IReqRegisterAccount} message ReqRegisterAccount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqRegisterAccount.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqRegisterAccount message from the specified reader or buffer.
         * @function decode
         * @memberof bol.ReqRegisterAccount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.ReqRegisterAccount} ReqRegisterAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqRegisterAccount.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.ReqRegisterAccount();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("account"))
                throw $util.ProtocolError("missing required 'account'", { instance: message });
            if (!message.hasOwnProperty("password"))
                throw $util.ProtocolError("missing required 'password'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqRegisterAccount message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.ReqRegisterAccount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.ReqRegisterAccount} ReqRegisterAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqRegisterAccount.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqRegisterAccount message.
         * @function verify
         * @memberof bol.ReqRegisterAccount
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqRegisterAccount.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.account))
                return "account: string expected";
            if (!$util.isString(message.password))
                return "password: string expected";
            return null;
        };

        /**
         * Creates a ReqRegisterAccount message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.ReqRegisterAccount
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.ReqRegisterAccount} ReqRegisterAccount
         */
        ReqRegisterAccount.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.ReqRegisterAccount)
                return object;
            var message = new $root.bol.ReqRegisterAccount();
            if (object.account != null)
                message.account = String(object.account);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a ReqRegisterAccount message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.ReqRegisterAccount
         * @static
         * @param {bol.ReqRegisterAccount} message ReqRegisterAccount
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqRegisterAccount.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.account = "";
                object.password = "";
            }
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this ReqRegisterAccount to JSON.
         * @function toJSON
         * @memberof bol.ReqRegisterAccount
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqRegisterAccount.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqRegisterAccount;
    })();

    bol.RespRegisterAccount = (function() {

        /**
         * Properties of a RespRegisterAccount.
         * @memberof bol
         * @interface IRespRegisterAccount
         * @property {number} ret RespRegisterAccount ret
         */

        /**
         * Constructs a new RespRegisterAccount.
         * @memberof bol
         * @classdesc Represents a RespRegisterAccount.
         * @implements IRespRegisterAccount
         * @constructor
         * @param {bol.IRespRegisterAccount=} [properties] Properties to set
         */
        function RespRegisterAccount(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespRegisterAccount ret.
         * @member {number} ret
         * @memberof bol.RespRegisterAccount
         * @instance
         */
        RespRegisterAccount.prototype.ret = 0;

        /**
         * Creates a new RespRegisterAccount instance using the specified properties.
         * @function create
         * @memberof bol.RespRegisterAccount
         * @static
         * @param {bol.IRespRegisterAccount=} [properties] Properties to set
         * @returns {bol.RespRegisterAccount} RespRegisterAccount instance
         */
        RespRegisterAccount.create = function create(properties) {
            return new RespRegisterAccount(properties);
        };

        /**
         * Encodes the specified RespRegisterAccount message. Does not implicitly {@link bol.RespRegisterAccount.verify|verify} messages.
         * @function encode
         * @memberof bol.RespRegisterAccount
         * @static
         * @param {bol.IRespRegisterAccount} message RespRegisterAccount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRegisterAccount.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
            return writer;
        };

        /**
         * Encodes the specified RespRegisterAccount message, length delimited. Does not implicitly {@link bol.RespRegisterAccount.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.RespRegisterAccount
         * @static
         * @param {bol.IRespRegisterAccount} message RespRegisterAccount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRegisterAccount.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespRegisterAccount message from the specified reader or buffer.
         * @function decode
         * @memberof bol.RespRegisterAccount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.RespRegisterAccount} RespRegisterAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespRegisterAccount.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.RespRegisterAccount();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ret = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ret"))
                throw $util.ProtocolError("missing required 'ret'", { instance: message });
            return message;
        };

        /**
         * Decodes a RespRegisterAccount message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.RespRegisterAccount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.RespRegisterAccount} RespRegisterAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespRegisterAccount.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespRegisterAccount message.
         * @function verify
         * @memberof bol.RespRegisterAccount
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespRegisterAccount.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ret))
                return "ret: integer expected";
            return null;
        };

        /**
         * Creates a RespRegisterAccount message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.RespRegisterAccount
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.RespRegisterAccount} RespRegisterAccount
         */
        RespRegisterAccount.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.RespRegisterAccount)
                return object;
            var message = new $root.bol.RespRegisterAccount();
            if (object.ret != null)
                message.ret = object.ret | 0;
            return message;
        };

        /**
         * Creates a plain object from a RespRegisterAccount message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.RespRegisterAccount
         * @static
         * @param {bol.RespRegisterAccount} message RespRegisterAccount
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespRegisterAccount.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ret = 0;
            if (message.ret != null && message.hasOwnProperty("ret"))
                object.ret = message.ret;
            return object;
        };

        /**
         * Converts this RespRegisterAccount to JSON.
         * @function toJSON
         * @memberof bol.RespRegisterAccount
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespRegisterAccount.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespRegisterAccount;
    })();

    bol.NotForceOffLine = (function() {

        /**
         * Properties of a NotForceOffLine.
         * @memberof bol
         * @interface INotForceOffLine
         * @property {number} forcetype NotForceOffLine forcetype
         * @property {string|null} [ip] NotForceOffLine ip
         */

        /**
         * Constructs a new NotForceOffLine.
         * @memberof bol
         * @classdesc Represents a NotForceOffLine.
         * @implements INotForceOffLine
         * @constructor
         * @param {bol.INotForceOffLine=} [properties] Properties to set
         */
        function NotForceOffLine(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotForceOffLine forcetype.
         * @member {number} forcetype
         * @memberof bol.NotForceOffLine
         * @instance
         */
        NotForceOffLine.prototype.forcetype = 0;

        /**
         * NotForceOffLine ip.
         * @member {string} ip
         * @memberof bol.NotForceOffLine
         * @instance
         */
        NotForceOffLine.prototype.ip = "";

        /**
         * Creates a new NotForceOffLine instance using the specified properties.
         * @function create
         * @memberof bol.NotForceOffLine
         * @static
         * @param {bol.INotForceOffLine=} [properties] Properties to set
         * @returns {bol.NotForceOffLine} NotForceOffLine instance
         */
        NotForceOffLine.create = function create(properties) {
            return new NotForceOffLine(properties);
        };

        /**
         * Encodes the specified NotForceOffLine message. Does not implicitly {@link bol.NotForceOffLine.verify|verify} messages.
         * @function encode
         * @memberof bol.NotForceOffLine
         * @static
         * @param {bol.INotForceOffLine} message NotForceOffLine message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotForceOffLine.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.forcetype);
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ip);
            return writer;
        };

        /**
         * Encodes the specified NotForceOffLine message, length delimited. Does not implicitly {@link bol.NotForceOffLine.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.NotForceOffLine
         * @static
         * @param {bol.INotForceOffLine} message NotForceOffLine message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotForceOffLine.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotForceOffLine message from the specified reader or buffer.
         * @function decode
         * @memberof bol.NotForceOffLine
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.NotForceOffLine} NotForceOffLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotForceOffLine.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.NotForceOffLine();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.forcetype = reader.int32();
                    break;
                case 2:
                    message.ip = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("forcetype"))
                throw $util.ProtocolError("missing required 'forcetype'", { instance: message });
            return message;
        };

        /**
         * Decodes a NotForceOffLine message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.NotForceOffLine
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.NotForceOffLine} NotForceOffLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotForceOffLine.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotForceOffLine message.
         * @function verify
         * @memberof bol.NotForceOffLine
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotForceOffLine.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.forcetype))
                return "forcetype: integer expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            return null;
        };

        /**
         * Creates a NotForceOffLine message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.NotForceOffLine
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.NotForceOffLine} NotForceOffLine
         */
        NotForceOffLine.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.NotForceOffLine)
                return object;
            var message = new $root.bol.NotForceOffLine();
            if (object.forcetype != null)
                message.forcetype = object.forcetype | 0;
            if (object.ip != null)
                message.ip = String(object.ip);
            return message;
        };

        /**
         * Creates a plain object from a NotForceOffLine message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.NotForceOffLine
         * @static
         * @param {bol.NotForceOffLine} message NotForceOffLine
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotForceOffLine.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.forcetype = 0;
                object.ip = "";
            }
            if (message.forcetype != null && message.hasOwnProperty("forcetype"))
                object.forcetype = message.forcetype;
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            return object;
        };

        /**
         * Converts this NotForceOffLine to JSON.
         * @function toJSON
         * @memberof bol.NotForceOffLine
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotForceOffLine.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NotForceOffLine;
    })();

    bol.ReqLoginGame = (function() {

        /**
         * Properties of a ReqLoginGame.
         * @memberof bol
         * @interface IReqLoginGame
         * @property {number} ret ReqLoginGame ret
         * @property {number} playerid ReqLoginGame playerid
         * @property {string|null} [nickname] ReqLoginGame nickname
         * @property {string|null} [headimgurl] ReqLoginGame headimgurl
         */

        /**
         * Constructs a new ReqLoginGame.
         * @memberof bol
         * @classdesc Represents a ReqLoginGame.
         * @implements IReqLoginGame
         * @constructor
         * @param {bol.IReqLoginGame=} [properties] Properties to set
         */
        function ReqLoginGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqLoginGame ret.
         * @member {number} ret
         * @memberof bol.ReqLoginGame
         * @instance
         */
        ReqLoginGame.prototype.ret = 0;

        /**
         * ReqLoginGame playerid.
         * @member {number} playerid
         * @memberof bol.ReqLoginGame
         * @instance
         */
        ReqLoginGame.prototype.playerid = 0;

        /**
         * ReqLoginGame nickname.
         * @member {string} nickname
         * @memberof bol.ReqLoginGame
         * @instance
         */
        ReqLoginGame.prototype.nickname = "";

        /**
         * ReqLoginGame headimgurl.
         * @member {string} headimgurl
         * @memberof bol.ReqLoginGame
         * @instance
         */
        ReqLoginGame.prototype.headimgurl = "";

        /**
         * Creates a new ReqLoginGame instance using the specified properties.
         * @function create
         * @memberof bol.ReqLoginGame
         * @static
         * @param {bol.IReqLoginGame=} [properties] Properties to set
         * @returns {bol.ReqLoginGame} ReqLoginGame instance
         */
        ReqLoginGame.create = function create(properties) {
            return new ReqLoginGame(properties);
        };

        /**
         * Encodes the specified ReqLoginGame message. Does not implicitly {@link bol.ReqLoginGame.verify|verify} messages.
         * @function encode
         * @memberof bol.ReqLoginGame
         * @static
         * @param {bol.IReqLoginGame} message ReqLoginGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqLoginGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.playerid);
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
            if (message.headimgurl != null && message.hasOwnProperty("headimgurl"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.headimgurl);
            return writer;
        };

        /**
         * Encodes the specified ReqLoginGame message, length delimited. Does not implicitly {@link bol.ReqLoginGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.ReqLoginGame
         * @static
         * @param {bol.IReqLoginGame} message ReqLoginGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqLoginGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqLoginGame message from the specified reader or buffer.
         * @function decode
         * @memberof bol.ReqLoginGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.ReqLoginGame} ReqLoginGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqLoginGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.ReqLoginGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ret = reader.int32();
                    break;
                case 2:
                    message.playerid = reader.int32();
                    break;
                case 3:
                    message.nickname = reader.string();
                    break;
                case 4:
                    message.headimgurl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ret"))
                throw $util.ProtocolError("missing required 'ret'", { instance: message });
            if (!message.hasOwnProperty("playerid"))
                throw $util.ProtocolError("missing required 'playerid'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqLoginGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.ReqLoginGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.ReqLoginGame} ReqLoginGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqLoginGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqLoginGame message.
         * @function verify
         * @memberof bol.ReqLoginGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqLoginGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ret))
                return "ret: integer expected";
            if (!$util.isInteger(message.playerid))
                return "playerid: integer expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.headimgurl != null && message.hasOwnProperty("headimgurl"))
                if (!$util.isString(message.headimgurl))
                    return "headimgurl: string expected";
            return null;
        };

        /**
         * Creates a ReqLoginGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.ReqLoginGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.ReqLoginGame} ReqLoginGame
         */
        ReqLoginGame.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.ReqLoginGame)
                return object;
            var message = new $root.bol.ReqLoginGame();
            if (object.ret != null)
                message.ret = object.ret | 0;
            if (object.playerid != null)
                message.playerid = object.playerid | 0;
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.headimgurl != null)
                message.headimgurl = String(object.headimgurl);
            return message;
        };

        /**
         * Creates a plain object from a ReqLoginGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.ReqLoginGame
         * @static
         * @param {bol.ReqLoginGame} message ReqLoginGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqLoginGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ret = 0;
                object.playerid = 0;
                object.nickname = "";
                object.headimgurl = "";
            }
            if (message.ret != null && message.hasOwnProperty("ret"))
                object.ret = message.ret;
            if (message.playerid != null && message.hasOwnProperty("playerid"))
                object.playerid = message.playerid;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.headimgurl != null && message.hasOwnProperty("headimgurl"))
                object.headimgurl = message.headimgurl;
            return object;
        };

        /**
         * Converts this ReqLoginGame to JSON.
         * @function toJSON
         * @memberof bol.ReqLoginGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqLoginGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqLoginGame;
    })();

    bol.ReqMatchGame = (function() {

        /**
         * Properties of a ReqMatchGame.
         * @memberof bol
         * @interface IReqMatchGame
         * @property {number} matchtype ReqMatchGame matchtype
         * @property {number|null} [roletype] ReqMatchGame roletype
         */

        /**
         * Constructs a new ReqMatchGame.
         * @memberof bol
         * @classdesc Represents a ReqMatchGame.
         * @implements IReqMatchGame
         * @constructor
         * @param {bol.IReqMatchGame=} [properties] Properties to set
         */
        function ReqMatchGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqMatchGame matchtype.
         * @member {number} matchtype
         * @memberof bol.ReqMatchGame
         * @instance
         */
        ReqMatchGame.prototype.matchtype = 0;

        /**
         * ReqMatchGame roletype.
         * @member {number} roletype
         * @memberof bol.ReqMatchGame
         * @instance
         */
        ReqMatchGame.prototype.roletype = 0;

        /**
         * Creates a new ReqMatchGame instance using the specified properties.
         * @function create
         * @memberof bol.ReqMatchGame
         * @static
         * @param {bol.IReqMatchGame=} [properties] Properties to set
         * @returns {bol.ReqMatchGame} ReqMatchGame instance
         */
        ReqMatchGame.create = function create(properties) {
            return new ReqMatchGame(properties);
        };

        /**
         * Encodes the specified ReqMatchGame message. Does not implicitly {@link bol.ReqMatchGame.verify|verify} messages.
         * @function encode
         * @memberof bol.ReqMatchGame
         * @static
         * @param {bol.IReqMatchGame} message ReqMatchGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqMatchGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.matchtype);
            if (message.roletype != null && message.hasOwnProperty("roletype"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roletype);
            return writer;
        };

        /**
         * Encodes the specified ReqMatchGame message, length delimited. Does not implicitly {@link bol.ReqMatchGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.ReqMatchGame
         * @static
         * @param {bol.IReqMatchGame} message ReqMatchGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqMatchGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqMatchGame message from the specified reader or buffer.
         * @function decode
         * @memberof bol.ReqMatchGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.ReqMatchGame} ReqMatchGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqMatchGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.ReqMatchGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.matchtype = reader.int32();
                    break;
                case 2:
                    message.roletype = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("matchtype"))
                throw $util.ProtocolError("missing required 'matchtype'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqMatchGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.ReqMatchGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.ReqMatchGame} ReqMatchGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqMatchGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqMatchGame message.
         * @function verify
         * @memberof bol.ReqMatchGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqMatchGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.matchtype))
                return "matchtype: integer expected";
            if (message.roletype != null && message.hasOwnProperty("roletype"))
                if (!$util.isInteger(message.roletype))
                    return "roletype: integer expected";
            return null;
        };

        /**
         * Creates a ReqMatchGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.ReqMatchGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.ReqMatchGame} ReqMatchGame
         */
        ReqMatchGame.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.ReqMatchGame)
                return object;
            var message = new $root.bol.ReqMatchGame();
            if (object.matchtype != null)
                message.matchtype = object.matchtype | 0;
            if (object.roletype != null)
                message.roletype = object.roletype | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReqMatchGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.ReqMatchGame
         * @static
         * @param {bol.ReqMatchGame} message ReqMatchGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqMatchGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.matchtype = 0;
                object.roletype = 0;
            }
            if (message.matchtype != null && message.hasOwnProperty("matchtype"))
                object.matchtype = message.matchtype;
            if (message.roletype != null && message.hasOwnProperty("roletype"))
                object.roletype = message.roletype;
            return object;
        };

        /**
         * Converts this ReqMatchGame to JSON.
         * @function toJSON
         * @memberof bol.ReqMatchGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqMatchGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqMatchGame;
    })();

    bol.RespMatchGame = (function() {

        /**
         * Properties of a RespMatchGame.
         * @memberof bol
         * @interface IRespMatchGame
         * @property {number} ret RespMatchGame ret
         */

        /**
         * Constructs a new RespMatchGame.
         * @memberof bol
         * @classdesc Represents a RespMatchGame.
         * @implements IRespMatchGame
         * @constructor
         * @param {bol.IRespMatchGame=} [properties] Properties to set
         */
        function RespMatchGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespMatchGame ret.
         * @member {number} ret
         * @memberof bol.RespMatchGame
         * @instance
         */
        RespMatchGame.prototype.ret = 0;

        /**
         * Creates a new RespMatchGame instance using the specified properties.
         * @function create
         * @memberof bol.RespMatchGame
         * @static
         * @param {bol.IRespMatchGame=} [properties] Properties to set
         * @returns {bol.RespMatchGame} RespMatchGame instance
         */
        RespMatchGame.create = function create(properties) {
            return new RespMatchGame(properties);
        };

        /**
         * Encodes the specified RespMatchGame message. Does not implicitly {@link bol.RespMatchGame.verify|verify} messages.
         * @function encode
         * @memberof bol.RespMatchGame
         * @static
         * @param {bol.IRespMatchGame} message RespMatchGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespMatchGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
            return writer;
        };

        /**
         * Encodes the specified RespMatchGame message, length delimited. Does not implicitly {@link bol.RespMatchGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.RespMatchGame
         * @static
         * @param {bol.IRespMatchGame} message RespMatchGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespMatchGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespMatchGame message from the specified reader or buffer.
         * @function decode
         * @memberof bol.RespMatchGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.RespMatchGame} RespMatchGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespMatchGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.RespMatchGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ret = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ret"))
                throw $util.ProtocolError("missing required 'ret'", { instance: message });
            return message;
        };

        /**
         * Decodes a RespMatchGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.RespMatchGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.RespMatchGame} RespMatchGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespMatchGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespMatchGame message.
         * @function verify
         * @memberof bol.RespMatchGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespMatchGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ret))
                return "ret: integer expected";
            return null;
        };

        /**
         * Creates a RespMatchGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.RespMatchGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.RespMatchGame} RespMatchGame
         */
        RespMatchGame.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.RespMatchGame)
                return object;
            var message = new $root.bol.RespMatchGame();
            if (object.ret != null)
                message.ret = object.ret | 0;
            return message;
        };

        /**
         * Creates a plain object from a RespMatchGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.RespMatchGame
         * @static
         * @param {bol.RespMatchGame} message RespMatchGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespMatchGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ret = 0;
            if (message.ret != null && message.hasOwnProperty("ret"))
                object.ret = message.ret;
            return object;
        };

        /**
         * Converts this RespMatchGame to JSON.
         * @function toJSON
         * @memberof bol.RespMatchGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespMatchGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespMatchGame;
    })();

    bol.ReqGameAction = (function() {

        /**
         * Properties of a ReqGameAction.
         * @memberof bol
         * @interface IReqGameAction
         * @property {number} acttype ReqGameAction acttype
         */

        /**
         * Constructs a new ReqGameAction.
         * @memberof bol
         * @classdesc Represents a ReqGameAction.
         * @implements IReqGameAction
         * @constructor
         * @param {bol.IReqGameAction=} [properties] Properties to set
         */
        function ReqGameAction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqGameAction acttype.
         * @member {number} acttype
         * @memberof bol.ReqGameAction
         * @instance
         */
        ReqGameAction.prototype.acttype = 0;

        /**
         * Creates a new ReqGameAction instance using the specified properties.
         * @function create
         * @memberof bol.ReqGameAction
         * @static
         * @param {bol.IReqGameAction=} [properties] Properties to set
         * @returns {bol.ReqGameAction} ReqGameAction instance
         */
        ReqGameAction.create = function create(properties) {
            return new ReqGameAction(properties);
        };

        /**
         * Encodes the specified ReqGameAction message. Does not implicitly {@link bol.ReqGameAction.verify|verify} messages.
         * @function encode
         * @memberof bol.ReqGameAction
         * @static
         * @param {bol.IReqGameAction} message ReqGameAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqGameAction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.acttype);
            return writer;
        };

        /**
         * Encodes the specified ReqGameAction message, length delimited. Does not implicitly {@link bol.ReqGameAction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.ReqGameAction
         * @static
         * @param {bol.IReqGameAction} message ReqGameAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqGameAction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqGameAction message from the specified reader or buffer.
         * @function decode
         * @memberof bol.ReqGameAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.ReqGameAction} ReqGameAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqGameAction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.ReqGameAction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.acttype = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("acttype"))
                throw $util.ProtocolError("missing required 'acttype'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqGameAction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.ReqGameAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.ReqGameAction} ReqGameAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqGameAction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqGameAction message.
         * @function verify
         * @memberof bol.ReqGameAction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqGameAction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.acttype))
                return "acttype: integer expected";
            return null;
        };

        /**
         * Creates a ReqGameAction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.ReqGameAction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.ReqGameAction} ReqGameAction
         */
        ReqGameAction.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.ReqGameAction)
                return object;
            var message = new $root.bol.ReqGameAction();
            if (object.acttype != null)
                message.acttype = object.acttype | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReqGameAction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.ReqGameAction
         * @static
         * @param {bol.ReqGameAction} message ReqGameAction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqGameAction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.acttype = 0;
            if (message.acttype != null && message.hasOwnProperty("acttype"))
                object.acttype = message.acttype;
            return object;
        };

        /**
         * Converts this ReqGameAction to JSON.
         * @function toJSON
         * @memberof bol.ReqGameAction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqGameAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqGameAction;
    })();

    bol.MatchPlayer = (function() {

        /**
         * Properties of a MatchPlayer.
         * @memberof bol
         * @interface IMatchPlayer
         * @property {number} playerid MatchPlayer playerid
         * @property {string} nickname MatchPlayer nickname
         * @property {string} headimgurl MatchPlayer headimgurl
         * @property {number} uniqueid MatchPlayer uniqueid
         * @property {number} roletype MatchPlayer roletype
         * @property {number} camp MatchPlayer camp
         * @property {number|null} [movepathid] MatchPlayer movepathid
         * @property {number|null} [jjclv] MatchPlayer jjclv
         * @property {number|null} [jjcScore] MatchPlayer jjcScore
         */

        /**
         * Constructs a new MatchPlayer.
         * @memberof bol
         * @classdesc Represents a MatchPlayer.
         * @implements IMatchPlayer
         * @constructor
         * @param {bol.IMatchPlayer=} [properties] Properties to set
         */
        function MatchPlayer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MatchPlayer playerid.
         * @member {number} playerid
         * @memberof bol.MatchPlayer
         * @instance
         */
        MatchPlayer.prototype.playerid = 0;

        /**
         * MatchPlayer nickname.
         * @member {string} nickname
         * @memberof bol.MatchPlayer
         * @instance
         */
        MatchPlayer.prototype.nickname = "";

        /**
         * MatchPlayer headimgurl.
         * @member {string} headimgurl
         * @memberof bol.MatchPlayer
         * @instance
         */
        MatchPlayer.prototype.headimgurl = "";

        /**
         * MatchPlayer uniqueid.
         * @member {number} uniqueid
         * @memberof bol.MatchPlayer
         * @instance
         */
        MatchPlayer.prototype.uniqueid = 0;

        /**
         * MatchPlayer roletype.
         * @member {number} roletype
         * @memberof bol.MatchPlayer
         * @instance
         */
        MatchPlayer.prototype.roletype = 0;

        /**
         * MatchPlayer camp.
         * @member {number} camp
         * @memberof bol.MatchPlayer
         * @instance
         */
        MatchPlayer.prototype.camp = 0;

        /**
         * MatchPlayer movepathid.
         * @member {number} movepathid
         * @memberof bol.MatchPlayer
         * @instance
         */
        MatchPlayer.prototype.movepathid = 0;

        /**
         * MatchPlayer jjclv.
         * @member {number} jjclv
         * @memberof bol.MatchPlayer
         * @instance
         */
        MatchPlayer.prototype.jjclv = 0;

        /**
         * MatchPlayer jjcScore.
         * @member {number} jjcScore
         * @memberof bol.MatchPlayer
         * @instance
         */
        MatchPlayer.prototype.jjcScore = 0;

        /**
         * Creates a new MatchPlayer instance using the specified properties.
         * @function create
         * @memberof bol.MatchPlayer
         * @static
         * @param {bol.IMatchPlayer=} [properties] Properties to set
         * @returns {bol.MatchPlayer} MatchPlayer instance
         */
        MatchPlayer.create = function create(properties) {
            return new MatchPlayer(properties);
        };

        /**
         * Encodes the specified MatchPlayer message. Does not implicitly {@link bol.MatchPlayer.verify|verify} messages.
         * @function encode
         * @memberof bol.MatchPlayer
         * @static
         * @param {bol.IMatchPlayer} message MatchPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchPlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerid);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.headimgurl);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.uniqueid);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.roletype);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.camp);
            if (message.movepathid != null && message.hasOwnProperty("movepathid"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.movepathid);
            if (message.jjclv != null && message.hasOwnProperty("jjclv"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.jjclv);
            if (message.jjcScore != null && message.hasOwnProperty("jjcScore"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.jjcScore);
            return writer;
        };

        /**
         * Encodes the specified MatchPlayer message, length delimited. Does not implicitly {@link bol.MatchPlayer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.MatchPlayer
         * @static
         * @param {bol.IMatchPlayer} message MatchPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchPlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MatchPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof bol.MatchPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.MatchPlayer} MatchPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchPlayer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.MatchPlayer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerid = reader.int32();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                case 3:
                    message.headimgurl = reader.string();
                    break;
                case 4:
                    message.uniqueid = reader.int32();
                    break;
                case 5:
                    message.roletype = reader.int32();
                    break;
                case 6:
                    message.camp = reader.int32();
                    break;
                case 7:
                    message.movepathid = reader.int32();
                    break;
                case 8:
                    message.jjclv = reader.int32();
                    break;
                case 9:
                    message.jjcScore = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playerid"))
                throw $util.ProtocolError("missing required 'playerid'", { instance: message });
            if (!message.hasOwnProperty("nickname"))
                throw $util.ProtocolError("missing required 'nickname'", { instance: message });
            if (!message.hasOwnProperty("headimgurl"))
                throw $util.ProtocolError("missing required 'headimgurl'", { instance: message });
            if (!message.hasOwnProperty("uniqueid"))
                throw $util.ProtocolError("missing required 'uniqueid'", { instance: message });
            if (!message.hasOwnProperty("roletype"))
                throw $util.ProtocolError("missing required 'roletype'", { instance: message });
            if (!message.hasOwnProperty("camp"))
                throw $util.ProtocolError("missing required 'camp'", { instance: message });
            return message;
        };

        /**
         * Decodes a MatchPlayer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.MatchPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.MatchPlayer} MatchPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchPlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MatchPlayer message.
         * @function verify
         * @memberof bol.MatchPlayer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MatchPlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.playerid))
                return "playerid: integer expected";
            if (!$util.isString(message.nickname))
                return "nickname: string expected";
            if (!$util.isString(message.headimgurl))
                return "headimgurl: string expected";
            if (!$util.isInteger(message.uniqueid))
                return "uniqueid: integer expected";
            if (!$util.isInteger(message.roletype))
                return "roletype: integer expected";
            if (!$util.isInteger(message.camp))
                return "camp: integer expected";
            if (message.movepathid != null && message.hasOwnProperty("movepathid"))
                if (!$util.isInteger(message.movepathid))
                    return "movepathid: integer expected";
            if (message.jjclv != null && message.hasOwnProperty("jjclv"))
                if (!$util.isInteger(message.jjclv))
                    return "jjclv: integer expected";
            if (message.jjcScore != null && message.hasOwnProperty("jjcScore"))
                if (!$util.isInteger(message.jjcScore))
                    return "jjcScore: integer expected";
            return null;
        };

        /**
         * Creates a MatchPlayer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.MatchPlayer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.MatchPlayer} MatchPlayer
         */
        MatchPlayer.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.MatchPlayer)
                return object;
            var message = new $root.bol.MatchPlayer();
            if (object.playerid != null)
                message.playerid = object.playerid | 0;
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.headimgurl != null)
                message.headimgurl = String(object.headimgurl);
            if (object.uniqueid != null)
                message.uniqueid = object.uniqueid | 0;
            if (object.roletype != null)
                message.roletype = object.roletype | 0;
            if (object.camp != null)
                message.camp = object.camp | 0;
            if (object.movepathid != null)
                message.movepathid = object.movepathid | 0;
            if (object.jjclv != null)
                message.jjclv = object.jjclv | 0;
            if (object.jjcScore != null)
                message.jjcScore = object.jjcScore | 0;
            return message;
        };

        /**
         * Creates a plain object from a MatchPlayer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.MatchPlayer
         * @static
         * @param {bol.MatchPlayer} message MatchPlayer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MatchPlayer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playerid = 0;
                object.nickname = "";
                object.headimgurl = "";
                object.uniqueid = 0;
                object.roletype = 0;
                object.camp = 0;
                object.movepathid = 0;
                object.jjclv = 0;
                object.jjcScore = 0;
            }
            if (message.playerid != null && message.hasOwnProperty("playerid"))
                object.playerid = message.playerid;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.headimgurl != null && message.hasOwnProperty("headimgurl"))
                object.headimgurl = message.headimgurl;
            if (message.uniqueid != null && message.hasOwnProperty("uniqueid"))
                object.uniqueid = message.uniqueid;
            if (message.roletype != null && message.hasOwnProperty("roletype"))
                object.roletype = message.roletype;
            if (message.camp != null && message.hasOwnProperty("camp"))
                object.camp = message.camp;
            if (message.movepathid != null && message.hasOwnProperty("movepathid"))
                object.movepathid = message.movepathid;
            if (message.jjclv != null && message.hasOwnProperty("jjclv"))
                object.jjclv = message.jjclv;
            if (message.jjcScore != null && message.hasOwnProperty("jjcScore"))
                object.jjcScore = message.jjcScore;
            return object;
        };

        /**
         * Converts this MatchPlayer to JSON.
         * @function toJSON
         * @memberof bol.MatchPlayer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MatchPlayer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MatchPlayer;
    })();

    bol.NotMatchSuccess = (function() {

        /**
         * Properties of a NotMatchSuccess.
         * @memberof bol
         * @interface INotMatchSuccess
         * @property {Array.<bol.IMatchPlayer>|null} [players] NotMatchSuccess players
         */

        /**
         * Constructs a new NotMatchSuccess.
         * @memberof bol
         * @classdesc Represents a NotMatchSuccess.
         * @implements INotMatchSuccess
         * @constructor
         * @param {bol.INotMatchSuccess=} [properties] Properties to set
         */
        function NotMatchSuccess(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotMatchSuccess players.
         * @member {Array.<bol.IMatchPlayer>} players
         * @memberof bol.NotMatchSuccess
         * @instance
         */
        NotMatchSuccess.prototype.players = $util.emptyArray;

        /**
         * Creates a new NotMatchSuccess instance using the specified properties.
         * @function create
         * @memberof bol.NotMatchSuccess
         * @static
         * @param {bol.INotMatchSuccess=} [properties] Properties to set
         * @returns {bol.NotMatchSuccess} NotMatchSuccess instance
         */
        NotMatchSuccess.create = function create(properties) {
            return new NotMatchSuccess(properties);
        };

        /**
         * Encodes the specified NotMatchSuccess message. Does not implicitly {@link bol.NotMatchSuccess.verify|verify} messages.
         * @function encode
         * @memberof bol.NotMatchSuccess
         * @static
         * @param {bol.INotMatchSuccess} message NotMatchSuccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotMatchSuccess.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.bol.MatchPlayer.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NotMatchSuccess message, length delimited. Does not implicitly {@link bol.NotMatchSuccess.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.NotMatchSuccess
         * @static
         * @param {bol.INotMatchSuccess} message NotMatchSuccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotMatchSuccess.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotMatchSuccess message from the specified reader or buffer.
         * @function decode
         * @memberof bol.NotMatchSuccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.NotMatchSuccess} NotMatchSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotMatchSuccess.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.NotMatchSuccess();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.bol.MatchPlayer.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NotMatchSuccess message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.NotMatchSuccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.NotMatchSuccess} NotMatchSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotMatchSuccess.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotMatchSuccess message.
         * @function verify
         * @memberof bol.NotMatchSuccess
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotMatchSuccess.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.bol.MatchPlayer.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            return null;
        };

        /**
         * Creates a NotMatchSuccess message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.NotMatchSuccess
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.NotMatchSuccess} NotMatchSuccess
         */
        NotMatchSuccess.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.NotMatchSuccess)
                return object;
            var message = new $root.bol.NotMatchSuccess();
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".bol.NotMatchSuccess.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".bol.NotMatchSuccess.players: object expected");
                    message.players[i] = $root.bol.MatchPlayer.fromObject(object.players[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a NotMatchSuccess message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.NotMatchSuccess
         * @static
         * @param {bol.NotMatchSuccess} message NotMatchSuccess
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotMatchSuccess.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.bol.MatchPlayer.toObject(message.players[j], options);
            }
            return object;
        };

        /**
         * Converts this NotMatchSuccess to JSON.
         * @function toJSON
         * @memberof bol.NotMatchSuccess
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotMatchSuccess.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NotMatchSuccess;
    })();

    bol.ReqReady = (function() {

        /**
         * Properties of a ReqReady.
         * @memberof bol
         * @interface IReqReady
         * @property {number} playerid ReqReady playerid
         */

        /**
         * Constructs a new ReqReady.
         * @memberof bol
         * @classdesc Represents a ReqReady.
         * @implements IReqReady
         * @constructor
         * @param {bol.IReqReady=} [properties] Properties to set
         */
        function ReqReady(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqReady playerid.
         * @member {number} playerid
         * @memberof bol.ReqReady
         * @instance
         */
        ReqReady.prototype.playerid = 0;

        /**
         * Creates a new ReqReady instance using the specified properties.
         * @function create
         * @memberof bol.ReqReady
         * @static
         * @param {bol.IReqReady=} [properties] Properties to set
         * @returns {bol.ReqReady} ReqReady instance
         */
        ReqReady.create = function create(properties) {
            return new ReqReady(properties);
        };

        /**
         * Encodes the specified ReqReady message. Does not implicitly {@link bol.ReqReady.verify|verify} messages.
         * @function encode
         * @memberof bol.ReqReady
         * @static
         * @param {bol.IReqReady} message ReqReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqReady.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerid);
            return writer;
        };

        /**
         * Encodes the specified ReqReady message, length delimited. Does not implicitly {@link bol.ReqReady.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.ReqReady
         * @static
         * @param {bol.IReqReady} message ReqReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqReady.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqReady message from the specified reader or buffer.
         * @function decode
         * @memberof bol.ReqReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.ReqReady} ReqReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqReady.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.ReqReady();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playerid"))
                throw $util.ProtocolError("missing required 'playerid'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqReady message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.ReqReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.ReqReady} ReqReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqReady.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqReady message.
         * @function verify
         * @memberof bol.ReqReady
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqReady.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.playerid))
                return "playerid: integer expected";
            return null;
        };

        /**
         * Creates a ReqReady message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.ReqReady
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.ReqReady} ReqReady
         */
        ReqReady.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.ReqReady)
                return object;
            var message = new $root.bol.ReqReady();
            if (object.playerid != null)
                message.playerid = object.playerid | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReqReady message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.ReqReady
         * @static
         * @param {bol.ReqReady} message ReqReady
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqReady.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.playerid = 0;
            if (message.playerid != null && message.hasOwnProperty("playerid"))
                object.playerid = message.playerid;
            return object;
        };

        /**
         * Converts this ReqReady to JSON.
         * @function toJSON
         * @memberof bol.ReqReady
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqReady.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqReady;
    })();

    bol.RespReady = (function() {

        /**
         * Properties of a RespReady.
         * @memberof bol
         * @interface IRespReady
         * @property {number} ret RespReady ret
         */

        /**
         * Constructs a new RespReady.
         * @memberof bol
         * @classdesc Represents a RespReady.
         * @implements IRespReady
         * @constructor
         * @param {bol.IRespReady=} [properties] Properties to set
         */
        function RespReady(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespReady ret.
         * @member {number} ret
         * @memberof bol.RespReady
         * @instance
         */
        RespReady.prototype.ret = 0;

        /**
         * Creates a new RespReady instance using the specified properties.
         * @function create
         * @memberof bol.RespReady
         * @static
         * @param {bol.IRespReady=} [properties] Properties to set
         * @returns {bol.RespReady} RespReady instance
         */
        RespReady.create = function create(properties) {
            return new RespReady(properties);
        };

        /**
         * Encodes the specified RespReady message. Does not implicitly {@link bol.RespReady.verify|verify} messages.
         * @function encode
         * @memberof bol.RespReady
         * @static
         * @param {bol.IRespReady} message RespReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespReady.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
            return writer;
        };

        /**
         * Encodes the specified RespReady message, length delimited. Does not implicitly {@link bol.RespReady.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.RespReady
         * @static
         * @param {bol.IRespReady} message RespReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespReady.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespReady message from the specified reader or buffer.
         * @function decode
         * @memberof bol.RespReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.RespReady} RespReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespReady.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.RespReady();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ret = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ret"))
                throw $util.ProtocolError("missing required 'ret'", { instance: message });
            return message;
        };

        /**
         * Decodes a RespReady message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.RespReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.RespReady} RespReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespReady.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespReady message.
         * @function verify
         * @memberof bol.RespReady
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespReady.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ret))
                return "ret: integer expected";
            return null;
        };

        /**
         * Creates a RespReady message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.RespReady
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.RespReady} RespReady
         */
        RespReady.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.RespReady)
                return object;
            var message = new $root.bol.RespReady();
            if (object.ret != null)
                message.ret = object.ret | 0;
            return message;
        };

        /**
         * Creates a plain object from a RespReady message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.RespReady
         * @static
         * @param {bol.RespReady} message RespReady
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespReady.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ret = 0;
            if (message.ret != null && message.hasOwnProperty("ret"))
                object.ret = message.ret;
            return object;
        };

        /**
         * Converts this RespReady to JSON.
         * @function toJSON
         * @memberof bol.RespReady
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespReady.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespReady;
    })();

    bol.NotGameEnd = (function() {

        /**
         * Properties of a NotGameEnd.
         * @memberof bol
         * @interface INotGameEnd
         * @property {number} result NotGameEnd result
         */

        /**
         * Constructs a new NotGameEnd.
         * @memberof bol
         * @classdesc Represents a NotGameEnd.
         * @implements INotGameEnd
         * @constructor
         * @param {bol.INotGameEnd=} [properties] Properties to set
         */
        function NotGameEnd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotGameEnd result.
         * @member {number} result
         * @memberof bol.NotGameEnd
         * @instance
         */
        NotGameEnd.prototype.result = 0;

        /**
         * Creates a new NotGameEnd instance using the specified properties.
         * @function create
         * @memberof bol.NotGameEnd
         * @static
         * @param {bol.INotGameEnd=} [properties] Properties to set
         * @returns {bol.NotGameEnd} NotGameEnd instance
         */
        NotGameEnd.create = function create(properties) {
            return new NotGameEnd(properties);
        };

        /**
         * Encodes the specified NotGameEnd message. Does not implicitly {@link bol.NotGameEnd.verify|verify} messages.
         * @function encode
         * @memberof bol.NotGameEnd
         * @static
         * @param {bol.INotGameEnd} message NotGameEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotGameEnd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };

        /**
         * Encodes the specified NotGameEnd message, length delimited. Does not implicitly {@link bol.NotGameEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.NotGameEnd
         * @static
         * @param {bol.INotGameEnd} message NotGameEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotGameEnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotGameEnd message from the specified reader or buffer.
         * @function decode
         * @memberof bol.NotGameEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.NotGameEnd} NotGameEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotGameEnd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.NotGameEnd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            return message;
        };

        /**
         * Decodes a NotGameEnd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.NotGameEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.NotGameEnd} NotGameEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotGameEnd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotGameEnd message.
         * @function verify
         * @memberof bol.NotGameEnd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotGameEnd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.result))
                return "result: integer expected";
            return null;
        };

        /**
         * Creates a NotGameEnd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.NotGameEnd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.NotGameEnd} NotGameEnd
         */
        NotGameEnd.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.NotGameEnd)
                return object;
            var message = new $root.bol.NotGameEnd();
            if (object.result != null)
                message.result = object.result | 0;
            return message;
        };

        /**
         * Creates a plain object from a NotGameEnd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.NotGameEnd
         * @static
         * @param {bol.NotGameEnd} message NotGameEnd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotGameEnd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.result = 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            return object;
        };

        /**
         * Converts this NotGameEnd to JSON.
         * @function toJSON
         * @memberof bol.NotGameEnd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotGameEnd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NotGameEnd;
    })();

    bol.NotGameAction = (function() {

        /**
         * Properties of a NotGameAction.
         * @memberof bol
         * @interface INotGameAction
         * @property {number} actiontype NotGameAction actiontype
         */

        /**
         * Constructs a new NotGameAction.
         * @memberof bol
         * @classdesc Represents a NotGameAction.
         * @implements INotGameAction
         * @constructor
         * @param {bol.INotGameAction=} [properties] Properties to set
         */
        function NotGameAction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotGameAction actiontype.
         * @member {number} actiontype
         * @memberof bol.NotGameAction
         * @instance
         */
        NotGameAction.prototype.actiontype = 0;

        /**
         * Creates a new NotGameAction instance using the specified properties.
         * @function create
         * @memberof bol.NotGameAction
         * @static
         * @param {bol.INotGameAction=} [properties] Properties to set
         * @returns {bol.NotGameAction} NotGameAction instance
         */
        NotGameAction.create = function create(properties) {
            return new NotGameAction(properties);
        };

        /**
         * Encodes the specified NotGameAction message. Does not implicitly {@link bol.NotGameAction.verify|verify} messages.
         * @function encode
         * @memberof bol.NotGameAction
         * @static
         * @param {bol.INotGameAction} message NotGameAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotGameAction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.actiontype);
            return writer;
        };

        /**
         * Encodes the specified NotGameAction message, length delimited. Does not implicitly {@link bol.NotGameAction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.NotGameAction
         * @static
         * @param {bol.INotGameAction} message NotGameAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotGameAction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotGameAction message from the specified reader or buffer.
         * @function decode
         * @memberof bol.NotGameAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.NotGameAction} NotGameAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotGameAction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.NotGameAction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.actiontype = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("actiontype"))
                throw $util.ProtocolError("missing required 'actiontype'", { instance: message });
            return message;
        };

        /**
         * Decodes a NotGameAction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.NotGameAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.NotGameAction} NotGameAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotGameAction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotGameAction message.
         * @function verify
         * @memberof bol.NotGameAction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotGameAction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.actiontype))
                return "actiontype: integer expected";
            return null;
        };

        /**
         * Creates a NotGameAction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.NotGameAction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.NotGameAction} NotGameAction
         */
        NotGameAction.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.NotGameAction)
                return object;
            var message = new $root.bol.NotGameAction();
            if (object.actiontype != null)
                message.actiontype = object.actiontype | 0;
            return message;
        };

        /**
         * Creates a plain object from a NotGameAction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.NotGameAction
         * @static
         * @param {bol.NotGameAction} message NotGameAction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotGameAction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.actiontype = 0;
            if (message.actiontype != null && message.hasOwnProperty("actiontype"))
                object.actiontype = message.actiontype;
            return object;
        };

        /**
         * Converts this NotGameAction to JSON.
         * @function toJSON
         * @memberof bol.NotGameAction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotGameAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NotGameAction;
    })();

    bol.ReqMove = (function() {

        /**
         * Properties of a ReqMove.
         * @memberof bol
         * @interface IReqMove
         * @property {number} uniqueid ReqMove uniqueid
         * @property {number} x ReqMove x
         * @property {number} y ReqMove y
         */

        /**
         * Constructs a new ReqMove.
         * @memberof bol
         * @classdesc Represents a ReqMove.
         * @implements IReqMove
         * @constructor
         * @param {bol.IReqMove=} [properties] Properties to set
         */
        function ReqMove(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqMove uniqueid.
         * @member {number} uniqueid
         * @memberof bol.ReqMove
         * @instance
         */
        ReqMove.prototype.uniqueid = 0;

        /**
         * ReqMove x.
         * @member {number} x
         * @memberof bol.ReqMove
         * @instance
         */
        ReqMove.prototype.x = 0;

        /**
         * ReqMove y.
         * @member {number} y
         * @memberof bol.ReqMove
         * @instance
         */
        ReqMove.prototype.y = 0;

        /**
         * Creates a new ReqMove instance using the specified properties.
         * @function create
         * @memberof bol.ReqMove
         * @static
         * @param {bol.IReqMove=} [properties] Properties to set
         * @returns {bol.ReqMove} ReqMove instance
         */
        ReqMove.create = function create(properties) {
            return new ReqMove(properties);
        };

        /**
         * Encodes the specified ReqMove message. Does not implicitly {@link bol.ReqMove.verify|verify} messages.
         * @function encode
         * @memberof bol.ReqMove
         * @static
         * @param {bol.IReqMove} message ReqMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqMove.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uniqueid);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.x);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.y);
            return writer;
        };

        /**
         * Encodes the specified ReqMove message, length delimited. Does not implicitly {@link bol.ReqMove.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.ReqMove
         * @static
         * @param {bol.IReqMove} message ReqMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqMove.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqMove message from the specified reader or buffer.
         * @function decode
         * @memberof bol.ReqMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.ReqMove} ReqMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqMove.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.ReqMove();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uniqueid = reader.int32();
                    break;
                case 2:
                    message.x = reader.int32();
                    break;
                case 3:
                    message.y = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("uniqueid"))
                throw $util.ProtocolError("missing required 'uniqueid'", { instance: message });
            if (!message.hasOwnProperty("x"))
                throw $util.ProtocolError("missing required 'x'", { instance: message });
            if (!message.hasOwnProperty("y"))
                throw $util.ProtocolError("missing required 'y'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqMove message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.ReqMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.ReqMove} ReqMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqMove.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqMove message.
         * @function verify
         * @memberof bol.ReqMove
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqMove.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.uniqueid))
                return "uniqueid: integer expected";
            if (!$util.isInteger(message.x))
                return "x: integer expected";
            if (!$util.isInteger(message.y))
                return "y: integer expected";
            return null;
        };

        /**
         * Creates a ReqMove message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.ReqMove
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.ReqMove} ReqMove
         */
        ReqMove.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.ReqMove)
                return object;
            var message = new $root.bol.ReqMove();
            if (object.uniqueid != null)
                message.uniqueid = object.uniqueid | 0;
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReqMove message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.ReqMove
         * @static
         * @param {bol.ReqMove} message ReqMove
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqMove.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uniqueid = 0;
                object.x = 0;
                object.y = 0;
            }
            if (message.uniqueid != null && message.hasOwnProperty("uniqueid"))
                object.uniqueid = message.uniqueid;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            return object;
        };

        /**
         * Converts this ReqMove to JSON.
         * @function toJSON
         * @memberof bol.ReqMove
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqMove.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqMove;
    })();

    bol.NotMove = (function() {

        /**
         * Properties of a NotMove.
         * @memberof bol
         * @interface INotMove
         * @property {number} uniqueid NotMove uniqueid
         * @property {number} x NotMove x
         * @property {number} y NotMove y
         */

        /**
         * Constructs a new NotMove.
         * @memberof bol
         * @classdesc Represents a NotMove.
         * @implements INotMove
         * @constructor
         * @param {bol.INotMove=} [properties] Properties to set
         */
        function NotMove(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotMove uniqueid.
         * @member {number} uniqueid
         * @memberof bol.NotMove
         * @instance
         */
        NotMove.prototype.uniqueid = 0;

        /**
         * NotMove x.
         * @member {number} x
         * @memberof bol.NotMove
         * @instance
         */
        NotMove.prototype.x = 0;

        /**
         * NotMove y.
         * @member {number} y
         * @memberof bol.NotMove
         * @instance
         */
        NotMove.prototype.y = 0;

        /**
         * Creates a new NotMove instance using the specified properties.
         * @function create
         * @memberof bol.NotMove
         * @static
         * @param {bol.INotMove=} [properties] Properties to set
         * @returns {bol.NotMove} NotMove instance
         */
        NotMove.create = function create(properties) {
            return new NotMove(properties);
        };

        /**
         * Encodes the specified NotMove message. Does not implicitly {@link bol.NotMove.verify|verify} messages.
         * @function encode
         * @memberof bol.NotMove
         * @static
         * @param {bol.INotMove} message NotMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotMove.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uniqueid);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.x);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.y);
            return writer;
        };

        /**
         * Encodes the specified NotMove message, length delimited. Does not implicitly {@link bol.NotMove.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.NotMove
         * @static
         * @param {bol.INotMove} message NotMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotMove.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotMove message from the specified reader or buffer.
         * @function decode
         * @memberof bol.NotMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.NotMove} NotMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotMove.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.NotMove();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uniqueid = reader.int32();
                    break;
                case 2:
                    message.x = reader.int32();
                    break;
                case 3:
                    message.y = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("uniqueid"))
                throw $util.ProtocolError("missing required 'uniqueid'", { instance: message });
            if (!message.hasOwnProperty("x"))
                throw $util.ProtocolError("missing required 'x'", { instance: message });
            if (!message.hasOwnProperty("y"))
                throw $util.ProtocolError("missing required 'y'", { instance: message });
            return message;
        };

        /**
         * Decodes a NotMove message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.NotMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.NotMove} NotMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotMove.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotMove message.
         * @function verify
         * @memberof bol.NotMove
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotMove.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.uniqueid))
                return "uniqueid: integer expected";
            if (!$util.isInteger(message.x))
                return "x: integer expected";
            if (!$util.isInteger(message.y))
                return "y: integer expected";
            return null;
        };

        /**
         * Creates a NotMove message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.NotMove
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.NotMove} NotMove
         */
        NotMove.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.NotMove)
                return object;
            var message = new $root.bol.NotMove();
            if (object.uniqueid != null)
                message.uniqueid = object.uniqueid | 0;
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            return message;
        };

        /**
         * Creates a plain object from a NotMove message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.NotMove
         * @static
         * @param {bol.NotMove} message NotMove
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotMove.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uniqueid = 0;
                object.x = 0;
                object.y = 0;
            }
            if (message.uniqueid != null && message.hasOwnProperty("uniqueid"))
                object.uniqueid = message.uniqueid;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            return object;
        };

        /**
         * Converts this NotMove to JSON.
         * @function toJSON
         * @memberof bol.NotMove
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotMove.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NotMove;
    })();

    bol.Monster = (function() {

        /**
         * Properties of a Monster.
         * @memberof bol
         * @interface IMonster
         * @property {number} uniqueid Monster uniqueid
         * @property {number|null} [monsterType] Monster monsterType
         * @property {number|null} [camp] Monster camp
         */

        /**
         * Constructs a new Monster.
         * @memberof bol
         * @classdesc Represents a Monster.
         * @implements IMonster
         * @constructor
         * @param {bol.IMonster=} [properties] Properties to set
         */
        function Monster(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Monster uniqueid.
         * @member {number} uniqueid
         * @memberof bol.Monster
         * @instance
         */
        Monster.prototype.uniqueid = 0;

        /**
         * Monster monsterType.
         * @member {number} monsterType
         * @memberof bol.Monster
         * @instance
         */
        Monster.prototype.monsterType = 0;

        /**
         * Monster camp.
         * @member {number} camp
         * @memberof bol.Monster
         * @instance
         */
        Monster.prototype.camp = 0;

        /**
         * Creates a new Monster instance using the specified properties.
         * @function create
         * @memberof bol.Monster
         * @static
         * @param {bol.IMonster=} [properties] Properties to set
         * @returns {bol.Monster} Monster instance
         */
        Monster.create = function create(properties) {
            return new Monster(properties);
        };

        /**
         * Encodes the specified Monster message. Does not implicitly {@link bol.Monster.verify|verify} messages.
         * @function encode
         * @memberof bol.Monster
         * @static
         * @param {bol.IMonster} message Monster message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Monster.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uniqueid);
            if (message.monsterType != null && message.hasOwnProperty("monsterType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.monsterType);
            if (message.camp != null && message.hasOwnProperty("camp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.camp);
            return writer;
        };

        /**
         * Encodes the specified Monster message, length delimited. Does not implicitly {@link bol.Monster.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.Monster
         * @static
         * @param {bol.IMonster} message Monster message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Monster.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Monster message from the specified reader or buffer.
         * @function decode
         * @memberof bol.Monster
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.Monster} Monster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Monster.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.Monster();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uniqueid = reader.int32();
                    break;
                case 2:
                    message.monsterType = reader.int32();
                    break;
                case 3:
                    message.camp = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("uniqueid"))
                throw $util.ProtocolError("missing required 'uniqueid'", { instance: message });
            return message;
        };

        /**
         * Decodes a Monster message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.Monster
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.Monster} Monster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Monster.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Monster message.
         * @function verify
         * @memberof bol.Monster
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Monster.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.uniqueid))
                return "uniqueid: integer expected";
            if (message.monsterType != null && message.hasOwnProperty("monsterType"))
                if (!$util.isInteger(message.monsterType))
                    return "monsterType: integer expected";
            if (message.camp != null && message.hasOwnProperty("camp"))
                if (!$util.isInteger(message.camp))
                    return "camp: integer expected";
            return null;
        };

        /**
         * Creates a Monster message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.Monster
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.Monster} Monster
         */
        Monster.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.Monster)
                return object;
            var message = new $root.bol.Monster();
            if (object.uniqueid != null)
                message.uniqueid = object.uniqueid | 0;
            if (object.monsterType != null)
                message.monsterType = object.monsterType | 0;
            if (object.camp != null)
                message.camp = object.camp | 0;
            return message;
        };

        /**
         * Creates a plain object from a Monster message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.Monster
         * @static
         * @param {bol.Monster} message Monster
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Monster.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uniqueid = 0;
                object.monsterType = 0;
                object.camp = 0;
            }
            if (message.uniqueid != null && message.hasOwnProperty("uniqueid"))
                object.uniqueid = message.uniqueid;
            if (message.monsterType != null && message.hasOwnProperty("monsterType"))
                object.monsterType = message.monsterType;
            if (message.camp != null && message.hasOwnProperty("camp"))
                object.camp = message.camp;
            return object;
        };

        /**
         * Converts this Monster to JSON.
         * @function toJSON
         * @memberof bol.Monster
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Monster.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Monster;
    })();

    bol.ReqDamageMonster = (function() {

        /**
         * Properties of a ReqDamageMonster.
         * @memberof bol
         * @interface IReqDamageMonster
         * @property {number} uniqueid ReqDamageMonster uniqueid
         * @property {number|null} [damage] ReqDamageMonster damage
         */

        /**
         * Constructs a new ReqDamageMonster.
         * @memberof bol
         * @classdesc Represents a ReqDamageMonster.
         * @implements IReqDamageMonster
         * @constructor
         * @param {bol.IReqDamageMonster=} [properties] Properties to set
         */
        function ReqDamageMonster(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqDamageMonster uniqueid.
         * @member {number} uniqueid
         * @memberof bol.ReqDamageMonster
         * @instance
         */
        ReqDamageMonster.prototype.uniqueid = 0;

        /**
         * ReqDamageMonster damage.
         * @member {number} damage
         * @memberof bol.ReqDamageMonster
         * @instance
         */
        ReqDamageMonster.prototype.damage = 0;

        /**
         * Creates a new ReqDamageMonster instance using the specified properties.
         * @function create
         * @memberof bol.ReqDamageMonster
         * @static
         * @param {bol.IReqDamageMonster=} [properties] Properties to set
         * @returns {bol.ReqDamageMonster} ReqDamageMonster instance
         */
        ReqDamageMonster.create = function create(properties) {
            return new ReqDamageMonster(properties);
        };

        /**
         * Encodes the specified ReqDamageMonster message. Does not implicitly {@link bol.ReqDamageMonster.verify|verify} messages.
         * @function encode
         * @memberof bol.ReqDamageMonster
         * @static
         * @param {bol.IReqDamageMonster} message ReqDamageMonster message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqDamageMonster.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uniqueid);
            if (message.damage != null && message.hasOwnProperty("damage"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.damage);
            return writer;
        };

        /**
         * Encodes the specified ReqDamageMonster message, length delimited. Does not implicitly {@link bol.ReqDamageMonster.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.ReqDamageMonster
         * @static
         * @param {bol.IReqDamageMonster} message ReqDamageMonster message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqDamageMonster.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqDamageMonster message from the specified reader or buffer.
         * @function decode
         * @memberof bol.ReqDamageMonster
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.ReqDamageMonster} ReqDamageMonster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqDamageMonster.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.ReqDamageMonster();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uniqueid = reader.int32();
                    break;
                case 2:
                    message.damage = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("uniqueid"))
                throw $util.ProtocolError("missing required 'uniqueid'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqDamageMonster message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.ReqDamageMonster
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.ReqDamageMonster} ReqDamageMonster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqDamageMonster.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqDamageMonster message.
         * @function verify
         * @memberof bol.ReqDamageMonster
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqDamageMonster.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.uniqueid))
                return "uniqueid: integer expected";
            if (message.damage != null && message.hasOwnProperty("damage"))
                if (!$util.isInteger(message.damage))
                    return "damage: integer expected";
            return null;
        };

        /**
         * Creates a ReqDamageMonster message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.ReqDamageMonster
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.ReqDamageMonster} ReqDamageMonster
         */
        ReqDamageMonster.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.ReqDamageMonster)
                return object;
            var message = new $root.bol.ReqDamageMonster();
            if (object.uniqueid != null)
                message.uniqueid = object.uniqueid | 0;
            if (object.damage != null)
                message.damage = object.damage | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReqDamageMonster message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.ReqDamageMonster
         * @static
         * @param {bol.ReqDamageMonster} message ReqDamageMonster
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqDamageMonster.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uniqueid = 0;
                object.damage = 0;
            }
            if (message.uniqueid != null && message.hasOwnProperty("uniqueid"))
                object.uniqueid = message.uniqueid;
            if (message.damage != null && message.hasOwnProperty("damage"))
                object.damage = message.damage;
            return object;
        };

        /**
         * Converts this ReqDamageMonster to JSON.
         * @function toJSON
         * @memberof bol.ReqDamageMonster
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqDamageMonster.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqDamageMonster;
    })();

    bol.NotDamageMonster = (function() {

        /**
         * Properties of a NotDamageMonster.
         * @memberof bol
         * @interface INotDamageMonster
         * @property {Array.<bol.IMonster>|null} [monsters] NotDamageMonster monsters
         */

        /**
         * Constructs a new NotDamageMonster.
         * @memberof bol
         * @classdesc Represents a NotDamageMonster.
         * @implements INotDamageMonster
         * @constructor
         * @param {bol.INotDamageMonster=} [properties] Properties to set
         */
        function NotDamageMonster(properties) {
            this.monsters = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotDamageMonster monsters.
         * @member {Array.<bol.IMonster>} monsters
         * @memberof bol.NotDamageMonster
         * @instance
         */
        NotDamageMonster.prototype.monsters = $util.emptyArray;

        /**
         * Creates a new NotDamageMonster instance using the specified properties.
         * @function create
         * @memberof bol.NotDamageMonster
         * @static
         * @param {bol.INotDamageMonster=} [properties] Properties to set
         * @returns {bol.NotDamageMonster} NotDamageMonster instance
         */
        NotDamageMonster.create = function create(properties) {
            return new NotDamageMonster(properties);
        };

        /**
         * Encodes the specified NotDamageMonster message. Does not implicitly {@link bol.NotDamageMonster.verify|verify} messages.
         * @function encode
         * @memberof bol.NotDamageMonster
         * @static
         * @param {bol.INotDamageMonster} message NotDamageMonster message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotDamageMonster.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.monsters != null && message.monsters.length)
                for (var i = 0; i < message.monsters.length; ++i)
                    $root.bol.Monster.encode(message.monsters[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NotDamageMonster message, length delimited. Does not implicitly {@link bol.NotDamageMonster.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.NotDamageMonster
         * @static
         * @param {bol.INotDamageMonster} message NotDamageMonster message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotDamageMonster.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotDamageMonster message from the specified reader or buffer.
         * @function decode
         * @memberof bol.NotDamageMonster
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.NotDamageMonster} NotDamageMonster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotDamageMonster.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.NotDamageMonster();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.monsters && message.monsters.length))
                        message.monsters = [];
                    message.monsters.push($root.bol.Monster.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NotDamageMonster message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.NotDamageMonster
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.NotDamageMonster} NotDamageMonster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotDamageMonster.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotDamageMonster message.
         * @function verify
         * @memberof bol.NotDamageMonster
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotDamageMonster.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.monsters != null && message.hasOwnProperty("monsters")) {
                if (!Array.isArray(message.monsters))
                    return "monsters: array expected";
                for (var i = 0; i < message.monsters.length; ++i) {
                    var error = $root.bol.Monster.verify(message.monsters[i]);
                    if (error)
                        return "monsters." + error;
                }
            }
            return null;
        };

        /**
         * Creates a NotDamageMonster message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.NotDamageMonster
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.NotDamageMonster} NotDamageMonster
         */
        NotDamageMonster.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.NotDamageMonster)
                return object;
            var message = new $root.bol.NotDamageMonster();
            if (object.monsters) {
                if (!Array.isArray(object.monsters))
                    throw TypeError(".bol.NotDamageMonster.monsters: array expected");
                message.monsters = [];
                for (var i = 0; i < object.monsters.length; ++i) {
                    if (typeof object.monsters[i] !== "object")
                        throw TypeError(".bol.NotDamageMonster.monsters: object expected");
                    message.monsters[i] = $root.bol.Monster.fromObject(object.monsters[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a NotDamageMonster message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.NotDamageMonster
         * @static
         * @param {bol.NotDamageMonster} message NotDamageMonster
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotDamageMonster.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.monsters = [];
            if (message.monsters && message.monsters.length) {
                object.monsters = [];
                for (var j = 0; j < message.monsters.length; ++j)
                    object.monsters[j] = $root.bol.Monster.toObject(message.monsters[j], options);
            }
            return object;
        };

        /**
         * Converts this NotDamageMonster to JSON.
         * @function toJSON
         * @memberof bol.NotDamageMonster
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotDamageMonster.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NotDamageMonster;
    })();

    bol.NotMonsterFlush = (function() {

        /**
         * Properties of a NotMonsterFlush.
         * @memberof bol
         * @interface INotMonsterFlush
         * @property {Array.<bol.IMonster>|null} [monsters] NotMonsterFlush monsters
         * @property {number|null} [camp1num] NotMonsterFlush camp1num
         * @property {number|null} [camp2num] NotMonsterFlush camp2num
         */

        /**
         * Constructs a new NotMonsterFlush.
         * @memberof bol
         * @classdesc Represents a NotMonsterFlush.
         * @implements INotMonsterFlush
         * @constructor
         * @param {bol.INotMonsterFlush=} [properties] Properties to set
         */
        function NotMonsterFlush(properties) {
            this.monsters = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotMonsterFlush monsters.
         * @member {Array.<bol.IMonster>} monsters
         * @memberof bol.NotMonsterFlush
         * @instance
         */
        NotMonsterFlush.prototype.monsters = $util.emptyArray;

        /**
         * NotMonsterFlush camp1num.
         * @member {number} camp1num
         * @memberof bol.NotMonsterFlush
         * @instance
         */
        NotMonsterFlush.prototype.camp1num = 0;

        /**
         * NotMonsterFlush camp2num.
         * @member {number} camp2num
         * @memberof bol.NotMonsterFlush
         * @instance
         */
        NotMonsterFlush.prototype.camp2num = 0;

        /**
         * Creates a new NotMonsterFlush instance using the specified properties.
         * @function create
         * @memberof bol.NotMonsterFlush
         * @static
         * @param {bol.INotMonsterFlush=} [properties] Properties to set
         * @returns {bol.NotMonsterFlush} NotMonsterFlush instance
         */
        NotMonsterFlush.create = function create(properties) {
            return new NotMonsterFlush(properties);
        };

        /**
         * Encodes the specified NotMonsterFlush message. Does not implicitly {@link bol.NotMonsterFlush.verify|verify} messages.
         * @function encode
         * @memberof bol.NotMonsterFlush
         * @static
         * @param {bol.INotMonsterFlush} message NotMonsterFlush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotMonsterFlush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.monsters != null && message.monsters.length)
                for (var i = 0; i < message.monsters.length; ++i)
                    $root.bol.Monster.encode(message.monsters[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.camp1num != null && message.hasOwnProperty("camp1num"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.camp1num);
            if (message.camp2num != null && message.hasOwnProperty("camp2num"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.camp2num);
            return writer;
        };

        /**
         * Encodes the specified NotMonsterFlush message, length delimited. Does not implicitly {@link bol.NotMonsterFlush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.NotMonsterFlush
         * @static
         * @param {bol.INotMonsterFlush} message NotMonsterFlush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotMonsterFlush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotMonsterFlush message from the specified reader or buffer.
         * @function decode
         * @memberof bol.NotMonsterFlush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.NotMonsterFlush} NotMonsterFlush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotMonsterFlush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.NotMonsterFlush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.monsters && message.monsters.length))
                        message.monsters = [];
                    message.monsters.push($root.bol.Monster.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.camp1num = reader.int32();
                    break;
                case 3:
                    message.camp2num = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NotMonsterFlush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.NotMonsterFlush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.NotMonsterFlush} NotMonsterFlush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotMonsterFlush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotMonsterFlush message.
         * @function verify
         * @memberof bol.NotMonsterFlush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotMonsterFlush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.monsters != null && message.hasOwnProperty("monsters")) {
                if (!Array.isArray(message.monsters))
                    return "monsters: array expected";
                for (var i = 0; i < message.monsters.length; ++i) {
                    var error = $root.bol.Monster.verify(message.monsters[i]);
                    if (error)
                        return "monsters." + error;
                }
            }
            if (message.camp1num != null && message.hasOwnProperty("camp1num"))
                if (!$util.isInteger(message.camp1num))
                    return "camp1num: integer expected";
            if (message.camp2num != null && message.hasOwnProperty("camp2num"))
                if (!$util.isInteger(message.camp2num))
                    return "camp2num: integer expected";
            return null;
        };

        /**
         * Creates a NotMonsterFlush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.NotMonsterFlush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.NotMonsterFlush} NotMonsterFlush
         */
        NotMonsterFlush.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.NotMonsterFlush)
                return object;
            var message = new $root.bol.NotMonsterFlush();
            if (object.monsters) {
                if (!Array.isArray(object.monsters))
                    throw TypeError(".bol.NotMonsterFlush.monsters: array expected");
                message.monsters = [];
                for (var i = 0; i < object.monsters.length; ++i) {
                    if (typeof object.monsters[i] !== "object")
                        throw TypeError(".bol.NotMonsterFlush.monsters: object expected");
                    message.monsters[i] = $root.bol.Monster.fromObject(object.monsters[i]);
                }
            }
            if (object.camp1num != null)
                message.camp1num = object.camp1num | 0;
            if (object.camp2num != null)
                message.camp2num = object.camp2num | 0;
            return message;
        };

        /**
         * Creates a plain object from a NotMonsterFlush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.NotMonsterFlush
         * @static
         * @param {bol.NotMonsterFlush} message NotMonsterFlush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotMonsterFlush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.monsters = [];
            if (options.defaults) {
                object.camp1num = 0;
                object.camp2num = 0;
            }
            if (message.monsters && message.monsters.length) {
                object.monsters = [];
                for (var j = 0; j < message.monsters.length; ++j)
                    object.monsters[j] = $root.bol.Monster.toObject(message.monsters[j], options);
            }
            if (message.camp1num != null && message.hasOwnProperty("camp1num"))
                object.camp1num = message.camp1num;
            if (message.camp2num != null && message.hasOwnProperty("camp2num"))
                object.camp2num = message.camp2num;
            return object;
        };

        /**
         * Converts this NotMonsterFlush to JSON.
         * @function toJSON
         * @memberof bol.NotMonsterFlush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotMonsterFlush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NotMonsterFlush;
    })();

    bol.ReqAtkBuilding = (function() {

        /**
         * Properties of a ReqAtkBuilding.
         * @memberof bol
         * @interface IReqAtkBuilding
         * @property {number} damage ReqAtkBuilding damage
         */

        /**
         * Constructs a new ReqAtkBuilding.
         * @memberof bol
         * @classdesc Represents a ReqAtkBuilding.
         * @implements IReqAtkBuilding
         * @constructor
         * @param {bol.IReqAtkBuilding=} [properties] Properties to set
         */
        function ReqAtkBuilding(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAtkBuilding damage.
         * @member {number} damage
         * @memberof bol.ReqAtkBuilding
         * @instance
         */
        ReqAtkBuilding.prototype.damage = 0;

        /**
         * Creates a new ReqAtkBuilding instance using the specified properties.
         * @function create
         * @memberof bol.ReqAtkBuilding
         * @static
         * @param {bol.IReqAtkBuilding=} [properties] Properties to set
         * @returns {bol.ReqAtkBuilding} ReqAtkBuilding instance
         */
        ReqAtkBuilding.create = function create(properties) {
            return new ReqAtkBuilding(properties);
        };

        /**
         * Encodes the specified ReqAtkBuilding message. Does not implicitly {@link bol.ReqAtkBuilding.verify|verify} messages.
         * @function encode
         * @memberof bol.ReqAtkBuilding
         * @static
         * @param {bol.IReqAtkBuilding} message ReqAtkBuilding message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAtkBuilding.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.damage);
            return writer;
        };

        /**
         * Encodes the specified ReqAtkBuilding message, length delimited. Does not implicitly {@link bol.ReqAtkBuilding.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.ReqAtkBuilding
         * @static
         * @param {bol.IReqAtkBuilding} message ReqAtkBuilding message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAtkBuilding.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqAtkBuilding message from the specified reader or buffer.
         * @function decode
         * @memberof bol.ReqAtkBuilding
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.ReqAtkBuilding} ReqAtkBuilding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAtkBuilding.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.ReqAtkBuilding();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.damage = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("damage"))
                throw $util.ProtocolError("missing required 'damage'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqAtkBuilding message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.ReqAtkBuilding
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.ReqAtkBuilding} ReqAtkBuilding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAtkBuilding.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqAtkBuilding message.
         * @function verify
         * @memberof bol.ReqAtkBuilding
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqAtkBuilding.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.damage))
                return "damage: integer expected";
            return null;
        };

        /**
         * Creates a ReqAtkBuilding message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.ReqAtkBuilding
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.ReqAtkBuilding} ReqAtkBuilding
         */
        ReqAtkBuilding.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.ReqAtkBuilding)
                return object;
            var message = new $root.bol.ReqAtkBuilding();
            if (object.damage != null)
                message.damage = object.damage | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReqAtkBuilding message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.ReqAtkBuilding
         * @static
         * @param {bol.ReqAtkBuilding} message ReqAtkBuilding
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqAtkBuilding.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.damage = 0;
            if (message.damage != null && message.hasOwnProperty("damage"))
                object.damage = message.damage;
            return object;
        };

        /**
         * Converts this ReqAtkBuilding to JSON.
         * @function toJSON
         * @memberof bol.ReqAtkBuilding
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqAtkBuilding.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqAtkBuilding;
    })();

    bol.NotBuildingHP = (function() {

        /**
         * Properties of a NotBuildingHP.
         * @memberof bol
         * @interface INotBuildingHP
         * @property {number} camp NotBuildingHP camp
         * @property {number} hp NotBuildingHP hp
         */

        /**
         * Constructs a new NotBuildingHP.
         * @memberof bol
         * @classdesc Represents a NotBuildingHP.
         * @implements INotBuildingHP
         * @constructor
         * @param {bol.INotBuildingHP=} [properties] Properties to set
         */
        function NotBuildingHP(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotBuildingHP camp.
         * @member {number} camp
         * @memberof bol.NotBuildingHP
         * @instance
         */
        NotBuildingHP.prototype.camp = 0;

        /**
         * NotBuildingHP hp.
         * @member {number} hp
         * @memberof bol.NotBuildingHP
         * @instance
         */
        NotBuildingHP.prototype.hp = 0;

        /**
         * Creates a new NotBuildingHP instance using the specified properties.
         * @function create
         * @memberof bol.NotBuildingHP
         * @static
         * @param {bol.INotBuildingHP=} [properties] Properties to set
         * @returns {bol.NotBuildingHP} NotBuildingHP instance
         */
        NotBuildingHP.create = function create(properties) {
            return new NotBuildingHP(properties);
        };

        /**
         * Encodes the specified NotBuildingHP message. Does not implicitly {@link bol.NotBuildingHP.verify|verify} messages.
         * @function encode
         * @memberof bol.NotBuildingHP
         * @static
         * @param {bol.INotBuildingHP} message NotBuildingHP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotBuildingHP.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.camp);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.hp);
            return writer;
        };

        /**
         * Encodes the specified NotBuildingHP message, length delimited. Does not implicitly {@link bol.NotBuildingHP.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.NotBuildingHP
         * @static
         * @param {bol.INotBuildingHP} message NotBuildingHP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotBuildingHP.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotBuildingHP message from the specified reader or buffer.
         * @function decode
         * @memberof bol.NotBuildingHP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.NotBuildingHP} NotBuildingHP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotBuildingHP.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.NotBuildingHP();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.camp = reader.int32();
                    break;
                case 2:
                    message.hp = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("camp"))
                throw $util.ProtocolError("missing required 'camp'", { instance: message });
            if (!message.hasOwnProperty("hp"))
                throw $util.ProtocolError("missing required 'hp'", { instance: message });
            return message;
        };

        /**
         * Decodes a NotBuildingHP message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.NotBuildingHP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.NotBuildingHP} NotBuildingHP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotBuildingHP.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotBuildingHP message.
         * @function verify
         * @memberof bol.NotBuildingHP
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotBuildingHP.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.camp))
                return "camp: integer expected";
            if (!$util.isInteger(message.hp))
                return "hp: integer expected";
            return null;
        };

        /**
         * Creates a NotBuildingHP message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.NotBuildingHP
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.NotBuildingHP} NotBuildingHP
         */
        NotBuildingHP.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.NotBuildingHP)
                return object;
            var message = new $root.bol.NotBuildingHP();
            if (object.camp != null)
                message.camp = object.camp | 0;
            if (object.hp != null)
                message.hp = object.hp | 0;
            return message;
        };

        /**
         * Creates a plain object from a NotBuildingHP message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.NotBuildingHP
         * @static
         * @param {bol.NotBuildingHP} message NotBuildingHP
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotBuildingHP.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.camp = 0;
                object.hp = 0;
            }
            if (message.camp != null && message.hasOwnProperty("camp"))
                object.camp = message.camp;
            if (message.hp != null && message.hasOwnProperty("hp"))
                object.hp = message.hp;
            return object;
        };

        /**
         * Converts this NotBuildingHP to JSON.
         * @function toJSON
         * @memberof bol.NotBuildingHP
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotBuildingHP.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NotBuildingHP;
    })();

    bol.NotMonsterLvUp = (function() {

        /**
         * Properties of a NotMonsterLvUp.
         * @memberof bol
         * @interface INotMonsterLvUp
         * @property {number} camp NotMonsterLvUp camp
         * @property {number} lv NotMonsterLvUp lv
         */

        /**
         * Constructs a new NotMonsterLvUp.
         * @memberof bol
         * @classdesc Represents a NotMonsterLvUp.
         * @implements INotMonsterLvUp
         * @constructor
         * @param {bol.INotMonsterLvUp=} [properties] Properties to set
         */
        function NotMonsterLvUp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotMonsterLvUp camp.
         * @member {number} camp
         * @memberof bol.NotMonsterLvUp
         * @instance
         */
        NotMonsterLvUp.prototype.camp = 0;

        /**
         * NotMonsterLvUp lv.
         * @member {number} lv
         * @memberof bol.NotMonsterLvUp
         * @instance
         */
        NotMonsterLvUp.prototype.lv = 0;

        /**
         * Creates a new NotMonsterLvUp instance using the specified properties.
         * @function create
         * @memberof bol.NotMonsterLvUp
         * @static
         * @param {bol.INotMonsterLvUp=} [properties] Properties to set
         * @returns {bol.NotMonsterLvUp} NotMonsterLvUp instance
         */
        NotMonsterLvUp.create = function create(properties) {
            return new NotMonsterLvUp(properties);
        };

        /**
         * Encodes the specified NotMonsterLvUp message. Does not implicitly {@link bol.NotMonsterLvUp.verify|verify} messages.
         * @function encode
         * @memberof bol.NotMonsterLvUp
         * @static
         * @param {bol.INotMonsterLvUp} message NotMonsterLvUp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotMonsterLvUp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.camp);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.lv);
            return writer;
        };

        /**
         * Encodes the specified NotMonsterLvUp message, length delimited. Does not implicitly {@link bol.NotMonsterLvUp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.NotMonsterLvUp
         * @static
         * @param {bol.INotMonsterLvUp} message NotMonsterLvUp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotMonsterLvUp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotMonsterLvUp message from the specified reader or buffer.
         * @function decode
         * @memberof bol.NotMonsterLvUp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.NotMonsterLvUp} NotMonsterLvUp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotMonsterLvUp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.NotMonsterLvUp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.camp = reader.int32();
                    break;
                case 2:
                    message.lv = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("camp"))
                throw $util.ProtocolError("missing required 'camp'", { instance: message });
            if (!message.hasOwnProperty("lv"))
                throw $util.ProtocolError("missing required 'lv'", { instance: message });
            return message;
        };

        /**
         * Decodes a NotMonsterLvUp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.NotMonsterLvUp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.NotMonsterLvUp} NotMonsterLvUp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotMonsterLvUp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotMonsterLvUp message.
         * @function verify
         * @memberof bol.NotMonsterLvUp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotMonsterLvUp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.camp))
                return "camp: integer expected";
            if (!$util.isInteger(message.lv))
                return "lv: integer expected";
            return null;
        };

        /**
         * Creates a NotMonsterLvUp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.NotMonsterLvUp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.NotMonsterLvUp} NotMonsterLvUp
         */
        NotMonsterLvUp.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.NotMonsterLvUp)
                return object;
            var message = new $root.bol.NotMonsterLvUp();
            if (object.camp != null)
                message.camp = object.camp | 0;
            if (object.lv != null)
                message.lv = object.lv | 0;
            return message;
        };

        /**
         * Creates a plain object from a NotMonsterLvUp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.NotMonsterLvUp
         * @static
         * @param {bol.NotMonsterLvUp} message NotMonsterLvUp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotMonsterLvUp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.camp = 0;
                object.lv = 0;
            }
            if (message.camp != null && message.hasOwnProperty("camp"))
                object.camp = message.camp;
            if (message.lv != null && message.hasOwnProperty("lv"))
                object.lv = message.lv;
            return object;
        };

        /**
         * Converts this NotMonsterLvUp to JSON.
         * @function toJSON
         * @memberof bol.NotMonsterLvUp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotMonsterLvUp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NotMonsterLvUp;
    })();

    bol.NotGroundInfo = (function() {

        /**
         * Properties of a NotGroundInfo.
         * @memberof bol
         * @interface INotGroundInfo
         * @property {number} propid NotGroundInfo propid
         */

        /**
         * Constructs a new NotGroundInfo.
         * @memberof bol
         * @classdesc Represents a NotGroundInfo.
         * @implements INotGroundInfo
         * @constructor
         * @param {bol.INotGroundInfo=} [properties] Properties to set
         */
        function NotGroundInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotGroundInfo propid.
         * @member {number} propid
         * @memberof bol.NotGroundInfo
         * @instance
         */
        NotGroundInfo.prototype.propid = 0;

        /**
         * Creates a new NotGroundInfo instance using the specified properties.
         * @function create
         * @memberof bol.NotGroundInfo
         * @static
         * @param {bol.INotGroundInfo=} [properties] Properties to set
         * @returns {bol.NotGroundInfo} NotGroundInfo instance
         */
        NotGroundInfo.create = function create(properties) {
            return new NotGroundInfo(properties);
        };

        /**
         * Encodes the specified NotGroundInfo message. Does not implicitly {@link bol.NotGroundInfo.verify|verify} messages.
         * @function encode
         * @memberof bol.NotGroundInfo
         * @static
         * @param {bol.INotGroundInfo} message NotGroundInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotGroundInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.propid);
            return writer;
        };

        /**
         * Encodes the specified NotGroundInfo message, length delimited. Does not implicitly {@link bol.NotGroundInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bol.NotGroundInfo
         * @static
         * @param {bol.INotGroundInfo} message NotGroundInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotGroundInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotGroundInfo message from the specified reader or buffer.
         * @function decode
         * @memberof bol.NotGroundInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bol.NotGroundInfo} NotGroundInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotGroundInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bol.NotGroundInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.propid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("propid"))
                throw $util.ProtocolError("missing required 'propid'", { instance: message });
            return message;
        };

        /**
         * Decodes a NotGroundInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bol.NotGroundInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bol.NotGroundInfo} NotGroundInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotGroundInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotGroundInfo message.
         * @function verify
         * @memberof bol.NotGroundInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotGroundInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.propid))
                return "propid: integer expected";
            return null;
        };

        /**
         * Creates a NotGroundInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bol.NotGroundInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bol.NotGroundInfo} NotGroundInfo
         */
        NotGroundInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.bol.NotGroundInfo)
                return object;
            var message = new $root.bol.NotGroundInfo();
            if (object.propid != null)
                message.propid = object.propid | 0;
            return message;
        };

        /**
         * Creates a plain object from a NotGroundInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bol.NotGroundInfo
         * @static
         * @param {bol.NotGroundInfo} message NotGroundInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotGroundInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.propid = 0;
            if (message.propid != null && message.hasOwnProperty("propid"))
                object.propid = message.propid;
            return object;
        };

        /**
         * Converts this NotGroundInfo to JSON.
         * @function toJSON
         * @memberof bol.NotGroundInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotGroundInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NotGroundInfo;
    })();

    return bol;
})();