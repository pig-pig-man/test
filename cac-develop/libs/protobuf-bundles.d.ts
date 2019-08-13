type Long = protobuf.Long;

/** Namespace bol. */
declare namespace bol {

    /** Properties of a ReqGetOutOfService. */
    interface IReqGetOutOfService {
    }

    /** Represents a ReqGetOutOfService. */
    class ReqGetOutOfService implements IReqGetOutOfService {

        /**
         * Constructs a new ReqGetOutOfService.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.IReqGetOutOfService);

        /**
         * Creates a new ReqGetOutOfService instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqGetOutOfService instance
         */
        public static create(properties?: bol.IReqGetOutOfService): bol.ReqGetOutOfService;

        /**
         * Encodes the specified ReqGetOutOfService message. Does not implicitly {@link bol.ReqGetOutOfService.verify|verify} messages.
         * @param message ReqGetOutOfService message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.IReqGetOutOfService, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqGetOutOfService message, length delimited. Does not implicitly {@link bol.ReqGetOutOfService.verify|verify} messages.
         * @param message ReqGetOutOfService message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.IReqGetOutOfService, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqGetOutOfService message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqGetOutOfService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.ReqGetOutOfService;

        /**
         * Decodes a ReqGetOutOfService message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqGetOutOfService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.ReqGetOutOfService;

        /**
         * Verifies a ReqGetOutOfService message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqGetOutOfService message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqGetOutOfService
         */
        public static fromObject(object: { [k: string]: any }): bol.ReqGetOutOfService;

        /**
         * Creates a plain object from a ReqGetOutOfService message. Also converts values to other types if specified.
         * @param message ReqGetOutOfService
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.ReqGetOutOfService, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqGetOutOfService to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespGetOutOfService. */
    interface IRespGetOutOfService {

        /** RespGetOutOfService ret */
        ret: number;

        /** RespGetOutOfService notice */
        notice?: (string|null);
    }

    /** Represents a RespGetOutOfService. */
    class RespGetOutOfService implements IRespGetOutOfService {

        /**
         * Constructs a new RespGetOutOfService.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.IRespGetOutOfService);

        /** RespGetOutOfService ret. */
        public ret: number;

        /** RespGetOutOfService notice. */
        public notice: string;

        /**
         * Creates a new RespGetOutOfService instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespGetOutOfService instance
         */
        public static create(properties?: bol.IRespGetOutOfService): bol.RespGetOutOfService;

        /**
         * Encodes the specified RespGetOutOfService message. Does not implicitly {@link bol.RespGetOutOfService.verify|verify} messages.
         * @param message RespGetOutOfService message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.IRespGetOutOfService, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespGetOutOfService message, length delimited. Does not implicitly {@link bol.RespGetOutOfService.verify|verify} messages.
         * @param message RespGetOutOfService message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.IRespGetOutOfService, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespGetOutOfService message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespGetOutOfService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.RespGetOutOfService;

        /**
         * Decodes a RespGetOutOfService message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespGetOutOfService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.RespGetOutOfService;

        /**
         * Verifies a RespGetOutOfService message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespGetOutOfService message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespGetOutOfService
         */
        public static fromObject(object: { [k: string]: any }): bol.RespGetOutOfService;

        /**
         * Creates a plain object from a RespGetOutOfService message. Also converts values to other types if specified.
         * @param message RespGetOutOfService
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.RespGetOutOfService, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespGetOutOfService to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqAccountLogin. */
    interface IReqAccountLogin {

        /** ReqAccountLogin account */
        account: string;

        /** ReqAccountLogin password */
        password: string;

        /** ReqAccountLogin nickname */
        nickname?: (string|null);

        /** ReqAccountLogin headimgurl */
        headimgurl?: (string|null);

        /** ReqAccountLogin sex */
        sex?: (string|null);

        /** ReqAccountLogin platid */
        platid?: (string|null);

        /** ReqAccountLogin inviter */
        inviter?: (string|null);

        /** ReqAccountLogin openids */
        openids?: (string[]|null);
    }

    /** Represents a ReqAccountLogin. */
    class ReqAccountLogin implements IReqAccountLogin {

        /**
         * Constructs a new ReqAccountLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.IReqAccountLogin);

        /** ReqAccountLogin account. */
        public account: string;

        /** ReqAccountLogin password. */
        public password: string;

        /** ReqAccountLogin nickname. */
        public nickname: string;

        /** ReqAccountLogin headimgurl. */
        public headimgurl: string;

        /** ReqAccountLogin sex. */
        public sex: string;

        /** ReqAccountLogin platid. */
        public platid: string;

        /** ReqAccountLogin inviter. */
        public inviter: string;

        /** ReqAccountLogin openids. */
        public openids: string[];

        /**
         * Creates a new ReqAccountLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAccountLogin instance
         */
        public static create(properties?: bol.IReqAccountLogin): bol.ReqAccountLogin;

        /**
         * Encodes the specified ReqAccountLogin message. Does not implicitly {@link bol.ReqAccountLogin.verify|verify} messages.
         * @param message ReqAccountLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.IReqAccountLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAccountLogin message, length delimited. Does not implicitly {@link bol.ReqAccountLogin.verify|verify} messages.
         * @param message ReqAccountLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.IReqAccountLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAccountLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAccountLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.ReqAccountLogin;

        /**
         * Decodes a ReqAccountLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAccountLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.ReqAccountLogin;

        /**
         * Verifies a ReqAccountLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqAccountLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqAccountLogin
         */
        public static fromObject(object: { [k: string]: any }): bol.ReqAccountLogin;

        /**
         * Creates a plain object from a ReqAccountLogin message. Also converts values to other types if specified.
         * @param message ReqAccountLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.ReqAccountLogin, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqAccountLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespAccountLogin. */
    interface IRespAccountLogin {

        /** RespAccountLogin ret */
        ret: number;

        /** RespAccountLogin playerid */
        playerid?: (number|null);

        /** RespAccountLogin key */
        key?: (number|null);

        /** RespAccountLogin gate */
        gate?: (string|null);
    }

    /** Represents a RespAccountLogin. */
    class RespAccountLogin implements IRespAccountLogin {

        /**
         * Constructs a new RespAccountLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.IRespAccountLogin);

        /** RespAccountLogin ret. */
        public ret: number;

        /** RespAccountLogin playerid. */
        public playerid: number;

        /** RespAccountLogin key. */
        public key: number;

        /** RespAccountLogin gate. */
        public gate: string;

        /**
         * Creates a new RespAccountLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespAccountLogin instance
         */
        public static create(properties?: bol.IRespAccountLogin): bol.RespAccountLogin;

        /**
         * Encodes the specified RespAccountLogin message. Does not implicitly {@link bol.RespAccountLogin.verify|verify} messages.
         * @param message RespAccountLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.IRespAccountLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespAccountLogin message, length delimited. Does not implicitly {@link bol.RespAccountLogin.verify|verify} messages.
         * @param message RespAccountLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.IRespAccountLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespAccountLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespAccountLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.RespAccountLogin;

        /**
         * Decodes a RespAccountLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespAccountLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.RespAccountLogin;

        /**
         * Verifies a RespAccountLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespAccountLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespAccountLogin
         */
        public static fromObject(object: { [k: string]: any }): bol.RespAccountLogin;

        /**
         * Creates a plain object from a RespAccountLogin message. Also converts values to other types if specified.
         * @param message RespAccountLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.RespAccountLogin, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespAccountLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqRegisterAccount. */
    interface IReqRegisterAccount {

        /** ReqRegisterAccount account */
        account: string;

        /** ReqRegisterAccount password */
        password: string;
    }

    /** Represents a ReqRegisterAccount. */
    class ReqRegisterAccount implements IReqRegisterAccount {

        /**
         * Constructs a new ReqRegisterAccount.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.IReqRegisterAccount);

        /** ReqRegisterAccount account. */
        public account: string;

        /** ReqRegisterAccount password. */
        public password: string;

        /**
         * Creates a new ReqRegisterAccount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqRegisterAccount instance
         */
        public static create(properties?: bol.IReqRegisterAccount): bol.ReqRegisterAccount;

        /**
         * Encodes the specified ReqRegisterAccount message. Does not implicitly {@link bol.ReqRegisterAccount.verify|verify} messages.
         * @param message ReqRegisterAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.IReqRegisterAccount, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqRegisterAccount message, length delimited. Does not implicitly {@link bol.ReqRegisterAccount.verify|verify} messages.
         * @param message ReqRegisterAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.IReqRegisterAccount, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqRegisterAccount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqRegisterAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.ReqRegisterAccount;

        /**
         * Decodes a ReqRegisterAccount message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqRegisterAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.ReqRegisterAccount;

        /**
         * Verifies a ReqRegisterAccount message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqRegisterAccount message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqRegisterAccount
         */
        public static fromObject(object: { [k: string]: any }): bol.ReqRegisterAccount;

        /**
         * Creates a plain object from a ReqRegisterAccount message. Also converts values to other types if specified.
         * @param message ReqRegisterAccount
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.ReqRegisterAccount, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqRegisterAccount to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespRegisterAccount. */
    interface IRespRegisterAccount {

        /** RespRegisterAccount ret */
        ret: number;
    }

    /** Represents a RespRegisterAccount. */
    class RespRegisterAccount implements IRespRegisterAccount {

        /**
         * Constructs a new RespRegisterAccount.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.IRespRegisterAccount);

        /** RespRegisterAccount ret. */
        public ret: number;

        /**
         * Creates a new RespRegisterAccount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespRegisterAccount instance
         */
        public static create(properties?: bol.IRespRegisterAccount): bol.RespRegisterAccount;

        /**
         * Encodes the specified RespRegisterAccount message. Does not implicitly {@link bol.RespRegisterAccount.verify|verify} messages.
         * @param message RespRegisterAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.IRespRegisterAccount, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespRegisterAccount message, length delimited. Does not implicitly {@link bol.RespRegisterAccount.verify|verify} messages.
         * @param message RespRegisterAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.IRespRegisterAccount, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespRegisterAccount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespRegisterAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.RespRegisterAccount;

        /**
         * Decodes a RespRegisterAccount message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespRegisterAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.RespRegisterAccount;

        /**
         * Verifies a RespRegisterAccount message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespRegisterAccount message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespRegisterAccount
         */
        public static fromObject(object: { [k: string]: any }): bol.RespRegisterAccount;

        /**
         * Creates a plain object from a RespRegisterAccount message. Also converts values to other types if specified.
         * @param message RespRegisterAccount
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.RespRegisterAccount, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespRegisterAccount to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NotForceOffLine. */
    interface INotForceOffLine {

        /** NotForceOffLine forcetype */
        forcetype: number;

        /** NotForceOffLine ip */
        ip?: (string|null);
    }

    /** Represents a NotForceOffLine. */
    class NotForceOffLine implements INotForceOffLine {

        /**
         * Constructs a new NotForceOffLine.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.INotForceOffLine);

        /** NotForceOffLine forcetype. */
        public forcetype: number;

        /** NotForceOffLine ip. */
        public ip: string;

        /**
         * Creates a new NotForceOffLine instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotForceOffLine instance
         */
        public static create(properties?: bol.INotForceOffLine): bol.NotForceOffLine;

        /**
         * Encodes the specified NotForceOffLine message. Does not implicitly {@link bol.NotForceOffLine.verify|verify} messages.
         * @param message NotForceOffLine message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.INotForceOffLine, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotForceOffLine message, length delimited. Does not implicitly {@link bol.NotForceOffLine.verify|verify} messages.
         * @param message NotForceOffLine message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.INotForceOffLine, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotForceOffLine message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotForceOffLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.NotForceOffLine;

        /**
         * Decodes a NotForceOffLine message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotForceOffLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.NotForceOffLine;

        /**
         * Verifies a NotForceOffLine message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotForceOffLine message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotForceOffLine
         */
        public static fromObject(object: { [k: string]: any }): bol.NotForceOffLine;

        /**
         * Creates a plain object from a NotForceOffLine message. Also converts values to other types if specified.
         * @param message NotForceOffLine
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.NotForceOffLine, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotForceOffLine to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqLoginGame. */
    interface IReqLoginGame {

        /** ReqLoginGame ret */
        ret: number;

        /** ReqLoginGame playerid */
        playerid: number;

        /** ReqLoginGame nickname */
        nickname?: (string|null);

        /** ReqLoginGame headimgurl */
        headimgurl?: (string|null);
    }

    /** Represents a ReqLoginGame. */
    class ReqLoginGame implements IReqLoginGame {

        /**
         * Constructs a new ReqLoginGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.IReqLoginGame);

        /** ReqLoginGame ret. */
        public ret: number;

        /** ReqLoginGame playerid. */
        public playerid: number;

        /** ReqLoginGame nickname. */
        public nickname: string;

        /** ReqLoginGame headimgurl. */
        public headimgurl: string;

        /**
         * Creates a new ReqLoginGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqLoginGame instance
         */
        public static create(properties?: bol.IReqLoginGame): bol.ReqLoginGame;

        /**
         * Encodes the specified ReqLoginGame message. Does not implicitly {@link bol.ReqLoginGame.verify|verify} messages.
         * @param message ReqLoginGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.IReqLoginGame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqLoginGame message, length delimited. Does not implicitly {@link bol.ReqLoginGame.verify|verify} messages.
         * @param message ReqLoginGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.IReqLoginGame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqLoginGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqLoginGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.ReqLoginGame;

        /**
         * Decodes a ReqLoginGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqLoginGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.ReqLoginGame;

        /**
         * Verifies a ReqLoginGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqLoginGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqLoginGame
         */
        public static fromObject(object: { [k: string]: any }): bol.ReqLoginGame;

        /**
         * Creates a plain object from a ReqLoginGame message. Also converts values to other types if specified.
         * @param message ReqLoginGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.ReqLoginGame, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqLoginGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqMatchGame. */
    interface IReqMatchGame {

        /** ReqMatchGame matchtype */
        matchtype: number;

        /** ReqMatchGame roletype */
        roletype?: (number|null);
    }

    /** Represents a ReqMatchGame. */
    class ReqMatchGame implements IReqMatchGame {

        /**
         * Constructs a new ReqMatchGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.IReqMatchGame);

        /** ReqMatchGame matchtype. */
        public matchtype: number;

        /** ReqMatchGame roletype. */
        public roletype: number;

        /**
         * Creates a new ReqMatchGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqMatchGame instance
         */
        public static create(properties?: bol.IReqMatchGame): bol.ReqMatchGame;

        /**
         * Encodes the specified ReqMatchGame message. Does not implicitly {@link bol.ReqMatchGame.verify|verify} messages.
         * @param message ReqMatchGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.IReqMatchGame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqMatchGame message, length delimited. Does not implicitly {@link bol.ReqMatchGame.verify|verify} messages.
         * @param message ReqMatchGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.IReqMatchGame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqMatchGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqMatchGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.ReqMatchGame;

        /**
         * Decodes a ReqMatchGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqMatchGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.ReqMatchGame;

        /**
         * Verifies a ReqMatchGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqMatchGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqMatchGame
         */
        public static fromObject(object: { [k: string]: any }): bol.ReqMatchGame;

        /**
         * Creates a plain object from a ReqMatchGame message. Also converts values to other types if specified.
         * @param message ReqMatchGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.ReqMatchGame, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqMatchGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespMatchGame. */
    interface IRespMatchGame {

        /** RespMatchGame ret */
        ret: number;
    }

    /** Represents a RespMatchGame. */
    class RespMatchGame implements IRespMatchGame {

        /**
         * Constructs a new RespMatchGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.IRespMatchGame);

        /** RespMatchGame ret. */
        public ret: number;

        /**
         * Creates a new RespMatchGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespMatchGame instance
         */
        public static create(properties?: bol.IRespMatchGame): bol.RespMatchGame;

        /**
         * Encodes the specified RespMatchGame message. Does not implicitly {@link bol.RespMatchGame.verify|verify} messages.
         * @param message RespMatchGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.IRespMatchGame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespMatchGame message, length delimited. Does not implicitly {@link bol.RespMatchGame.verify|verify} messages.
         * @param message RespMatchGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.IRespMatchGame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespMatchGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespMatchGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.RespMatchGame;

        /**
         * Decodes a RespMatchGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespMatchGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.RespMatchGame;

        /**
         * Verifies a RespMatchGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespMatchGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespMatchGame
         */
        public static fromObject(object: { [k: string]: any }): bol.RespMatchGame;

        /**
         * Creates a plain object from a RespMatchGame message. Also converts values to other types if specified.
         * @param message RespMatchGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.RespMatchGame, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespMatchGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqGameAction. */
    interface IReqGameAction {

        /** ReqGameAction acttype */
        acttype: number;
    }

    /** Represents a ReqGameAction. */
    class ReqGameAction implements IReqGameAction {

        /**
         * Constructs a new ReqGameAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.IReqGameAction);

        /** ReqGameAction acttype. */
        public acttype: number;

        /**
         * Creates a new ReqGameAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqGameAction instance
         */
        public static create(properties?: bol.IReqGameAction): bol.ReqGameAction;

        /**
         * Encodes the specified ReqGameAction message. Does not implicitly {@link bol.ReqGameAction.verify|verify} messages.
         * @param message ReqGameAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.IReqGameAction, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqGameAction message, length delimited. Does not implicitly {@link bol.ReqGameAction.verify|verify} messages.
         * @param message ReqGameAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.IReqGameAction, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqGameAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqGameAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.ReqGameAction;

        /**
         * Decodes a ReqGameAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqGameAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.ReqGameAction;

        /**
         * Verifies a ReqGameAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqGameAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqGameAction
         */
        public static fromObject(object: { [k: string]: any }): bol.ReqGameAction;

        /**
         * Creates a plain object from a ReqGameAction message. Also converts values to other types if specified.
         * @param message ReqGameAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.ReqGameAction, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqGameAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MatchPlayer. */
    interface IMatchPlayer {

        /** MatchPlayer playerid */
        playerid: number;

        /** MatchPlayer nickname */
        nickname: string;

        /** MatchPlayer headimgurl */
        headimgurl: string;

        /** MatchPlayer uniqueid */
        uniqueid: number;

        /** MatchPlayer roletype */
        roletype: number;

        /** MatchPlayer camp */
        camp: number;

        /** MatchPlayer movepathid */
        movepathid?: (number|null);

        /** MatchPlayer jjclv */
        jjclv?: (number|null);

        /** MatchPlayer jjcScore */
        jjcScore?: (number|null);
    }

    /** Represents a MatchPlayer. */
    class MatchPlayer implements IMatchPlayer {

        /**
         * Constructs a new MatchPlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.IMatchPlayer);

        /** MatchPlayer playerid. */
        public playerid: number;

        /** MatchPlayer nickname. */
        public nickname: string;

        /** MatchPlayer headimgurl. */
        public headimgurl: string;

        /** MatchPlayer uniqueid. */
        public uniqueid: number;

        /** MatchPlayer roletype. */
        public roletype: number;

        /** MatchPlayer camp. */
        public camp: number;

        /** MatchPlayer movepathid. */
        public movepathid: number;

        /** MatchPlayer jjclv. */
        public jjclv: number;

        /** MatchPlayer jjcScore. */
        public jjcScore: number;

        /**
         * Creates a new MatchPlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchPlayer instance
         */
        public static create(properties?: bol.IMatchPlayer): bol.MatchPlayer;

        /**
         * Encodes the specified MatchPlayer message. Does not implicitly {@link bol.MatchPlayer.verify|verify} messages.
         * @param message MatchPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.IMatchPlayer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MatchPlayer message, length delimited. Does not implicitly {@link bol.MatchPlayer.verify|verify} messages.
         * @param message MatchPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.IMatchPlayer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MatchPlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.MatchPlayer;

        /**
         * Decodes a MatchPlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MatchPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.MatchPlayer;

        /**
         * Verifies a MatchPlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MatchPlayer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MatchPlayer
         */
        public static fromObject(object: { [k: string]: any }): bol.MatchPlayer;

        /**
         * Creates a plain object from a MatchPlayer message. Also converts values to other types if specified.
         * @param message MatchPlayer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.MatchPlayer, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MatchPlayer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NotMatchSuccess. */
    interface INotMatchSuccess {

        /** NotMatchSuccess players */
        players?: (bol.IMatchPlayer[]|null);
    }

    /** Represents a NotMatchSuccess. */
    class NotMatchSuccess implements INotMatchSuccess {

        /**
         * Constructs a new NotMatchSuccess.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.INotMatchSuccess);

        /** NotMatchSuccess players. */
        public players: bol.IMatchPlayer[];

        /**
         * Creates a new NotMatchSuccess instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotMatchSuccess instance
         */
        public static create(properties?: bol.INotMatchSuccess): bol.NotMatchSuccess;

        /**
         * Encodes the specified NotMatchSuccess message. Does not implicitly {@link bol.NotMatchSuccess.verify|verify} messages.
         * @param message NotMatchSuccess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.INotMatchSuccess, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotMatchSuccess message, length delimited. Does not implicitly {@link bol.NotMatchSuccess.verify|verify} messages.
         * @param message NotMatchSuccess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.INotMatchSuccess, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotMatchSuccess message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotMatchSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.NotMatchSuccess;

        /**
         * Decodes a NotMatchSuccess message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotMatchSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.NotMatchSuccess;

        /**
         * Verifies a NotMatchSuccess message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotMatchSuccess message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotMatchSuccess
         */
        public static fromObject(object: { [k: string]: any }): bol.NotMatchSuccess;

        /**
         * Creates a plain object from a NotMatchSuccess message. Also converts values to other types if specified.
         * @param message NotMatchSuccess
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.NotMatchSuccess, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotMatchSuccess to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqReady. */
    interface IReqReady {

        /** ReqReady playerid */
        playerid: number;
    }

    /** Represents a ReqReady. */
    class ReqReady implements IReqReady {

        /**
         * Constructs a new ReqReady.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.IReqReady);

        /** ReqReady playerid. */
        public playerid: number;

        /**
         * Creates a new ReqReady instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqReady instance
         */
        public static create(properties?: bol.IReqReady): bol.ReqReady;

        /**
         * Encodes the specified ReqReady message. Does not implicitly {@link bol.ReqReady.verify|verify} messages.
         * @param message ReqReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.IReqReady, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqReady message, length delimited. Does not implicitly {@link bol.ReqReady.verify|verify} messages.
         * @param message ReqReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.IReqReady, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqReady message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.ReqReady;

        /**
         * Decodes a ReqReady message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.ReqReady;

        /**
         * Verifies a ReqReady message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqReady message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqReady
         */
        public static fromObject(object: { [k: string]: any }): bol.ReqReady;

        /**
         * Creates a plain object from a ReqReady message. Also converts values to other types if specified.
         * @param message ReqReady
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.ReqReady, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqReady to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespReady. */
    interface IRespReady {

        /** RespReady ret */
        ret: number;
    }

    /** Represents a RespReady. */
    class RespReady implements IRespReady {

        /**
         * Constructs a new RespReady.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.IRespReady);

        /** RespReady ret. */
        public ret: number;

        /**
         * Creates a new RespReady instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespReady instance
         */
        public static create(properties?: bol.IRespReady): bol.RespReady;

        /**
         * Encodes the specified RespReady message. Does not implicitly {@link bol.RespReady.verify|verify} messages.
         * @param message RespReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.IRespReady, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespReady message, length delimited. Does not implicitly {@link bol.RespReady.verify|verify} messages.
         * @param message RespReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.IRespReady, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespReady message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.RespReady;

        /**
         * Decodes a RespReady message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.RespReady;

        /**
         * Verifies a RespReady message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespReady message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespReady
         */
        public static fromObject(object: { [k: string]: any }): bol.RespReady;

        /**
         * Creates a plain object from a RespReady message. Also converts values to other types if specified.
         * @param message RespReady
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.RespReady, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespReady to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NotGameEnd. */
    interface INotGameEnd {

        /** NotGameEnd result */
        result: number;
    }

    /** Represents a NotGameEnd. */
    class NotGameEnd implements INotGameEnd {

        /**
         * Constructs a new NotGameEnd.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.INotGameEnd);

        /** NotGameEnd result. */
        public result: number;

        /**
         * Creates a new NotGameEnd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotGameEnd instance
         */
        public static create(properties?: bol.INotGameEnd): bol.NotGameEnd;

        /**
         * Encodes the specified NotGameEnd message. Does not implicitly {@link bol.NotGameEnd.verify|verify} messages.
         * @param message NotGameEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.INotGameEnd, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotGameEnd message, length delimited. Does not implicitly {@link bol.NotGameEnd.verify|verify} messages.
         * @param message NotGameEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.INotGameEnd, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotGameEnd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotGameEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.NotGameEnd;

        /**
         * Decodes a NotGameEnd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotGameEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.NotGameEnd;

        /**
         * Verifies a NotGameEnd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotGameEnd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotGameEnd
         */
        public static fromObject(object: { [k: string]: any }): bol.NotGameEnd;

        /**
         * Creates a plain object from a NotGameEnd message. Also converts values to other types if specified.
         * @param message NotGameEnd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.NotGameEnd, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotGameEnd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NotGameAction. */
    interface INotGameAction {

        /** NotGameAction actiontype */
        actiontype: number;
    }

    /** Represents a NotGameAction. */
    class NotGameAction implements INotGameAction {

        /**
         * Constructs a new NotGameAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.INotGameAction);

        /** NotGameAction actiontype. */
        public actiontype: number;

        /**
         * Creates a new NotGameAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotGameAction instance
         */
        public static create(properties?: bol.INotGameAction): bol.NotGameAction;

        /**
         * Encodes the specified NotGameAction message. Does not implicitly {@link bol.NotGameAction.verify|verify} messages.
         * @param message NotGameAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.INotGameAction, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotGameAction message, length delimited. Does not implicitly {@link bol.NotGameAction.verify|verify} messages.
         * @param message NotGameAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.INotGameAction, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotGameAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotGameAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.NotGameAction;

        /**
         * Decodes a NotGameAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotGameAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.NotGameAction;

        /**
         * Verifies a NotGameAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotGameAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotGameAction
         */
        public static fromObject(object: { [k: string]: any }): bol.NotGameAction;

        /**
         * Creates a plain object from a NotGameAction message. Also converts values to other types if specified.
         * @param message NotGameAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.NotGameAction, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotGameAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqMove. */
    interface IReqMove {

        /** ReqMove uniqueid */
        uniqueid: number;

        /** ReqMove x */
        x: number;

        /** ReqMove y */
        y: number;
    }

    /** Represents a ReqMove. */
    class ReqMove implements IReqMove {

        /**
         * Constructs a new ReqMove.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.IReqMove);

        /** ReqMove uniqueid. */
        public uniqueid: number;

        /** ReqMove x. */
        public x: number;

        /** ReqMove y. */
        public y: number;

        /**
         * Creates a new ReqMove instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqMove instance
         */
        public static create(properties?: bol.IReqMove): bol.ReqMove;

        /**
         * Encodes the specified ReqMove message. Does not implicitly {@link bol.ReqMove.verify|verify} messages.
         * @param message ReqMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.IReqMove, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqMove message, length delimited. Does not implicitly {@link bol.ReqMove.verify|verify} messages.
         * @param message ReqMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.IReqMove, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqMove message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.ReqMove;

        /**
         * Decodes a ReqMove message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.ReqMove;

        /**
         * Verifies a ReqMove message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqMove message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqMove
         */
        public static fromObject(object: { [k: string]: any }): bol.ReqMove;

        /**
         * Creates a plain object from a ReqMove message. Also converts values to other types if specified.
         * @param message ReqMove
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.ReqMove, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqMove to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NotMove. */
    interface INotMove {

        /** NotMove uniqueid */
        uniqueid: number;

        /** NotMove x */
        x: number;

        /** NotMove y */
        y: number;
    }

    /** Represents a NotMove. */
    class NotMove implements INotMove {

        /**
         * Constructs a new NotMove.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.INotMove);

        /** NotMove uniqueid. */
        public uniqueid: number;

        /** NotMove x. */
        public x: number;

        /** NotMove y. */
        public y: number;

        /**
         * Creates a new NotMove instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotMove instance
         */
        public static create(properties?: bol.INotMove): bol.NotMove;

        /**
         * Encodes the specified NotMove message. Does not implicitly {@link bol.NotMove.verify|verify} messages.
         * @param message NotMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.INotMove, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotMove message, length delimited. Does not implicitly {@link bol.NotMove.verify|verify} messages.
         * @param message NotMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.INotMove, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotMove message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.NotMove;

        /**
         * Decodes a NotMove message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.NotMove;

        /**
         * Verifies a NotMove message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotMove message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotMove
         */
        public static fromObject(object: { [k: string]: any }): bol.NotMove;

        /**
         * Creates a plain object from a NotMove message. Also converts values to other types if specified.
         * @param message NotMove
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.NotMove, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotMove to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Monster. */
    interface IMonster {

        /** Monster uniqueid */
        uniqueid: number;

        /** Monster monsterType */
        monsterType?: (number|null);

        /** Monster camp */
        camp?: (number|null);
    }

    /** Represents a Monster. */
    class Monster implements IMonster {

        /**
         * Constructs a new Monster.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.IMonster);

        /** Monster uniqueid. */
        public uniqueid: number;

        /** Monster monsterType. */
        public monsterType: number;

        /** Monster camp. */
        public camp: number;

        /**
         * Creates a new Monster instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Monster instance
         */
        public static create(properties?: bol.IMonster): bol.Monster;

        /**
         * Encodes the specified Monster message. Does not implicitly {@link bol.Monster.verify|verify} messages.
         * @param message Monster message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.IMonster, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Monster message, length delimited. Does not implicitly {@link bol.Monster.verify|verify} messages.
         * @param message Monster message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.IMonster, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Monster message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Monster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.Monster;

        /**
         * Decodes a Monster message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Monster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.Monster;

        /**
         * Verifies a Monster message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Monster message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Monster
         */
        public static fromObject(object: { [k: string]: any }): bol.Monster;

        /**
         * Creates a plain object from a Monster message. Also converts values to other types if specified.
         * @param message Monster
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.Monster, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Monster to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqDamageMonster. */
    interface IReqDamageMonster {

        /** ReqDamageMonster uniqueid */
        uniqueid: number;

        /** ReqDamageMonster damage */
        damage?: (number|null);
    }

    /** Represents a ReqDamageMonster. */
    class ReqDamageMonster implements IReqDamageMonster {

        /**
         * Constructs a new ReqDamageMonster.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.IReqDamageMonster);

        /** ReqDamageMonster uniqueid. */
        public uniqueid: number;

        /** ReqDamageMonster damage. */
        public damage: number;

        /**
         * Creates a new ReqDamageMonster instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqDamageMonster instance
         */
        public static create(properties?: bol.IReqDamageMonster): bol.ReqDamageMonster;

        /**
         * Encodes the specified ReqDamageMonster message. Does not implicitly {@link bol.ReqDamageMonster.verify|verify} messages.
         * @param message ReqDamageMonster message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.IReqDamageMonster, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqDamageMonster message, length delimited. Does not implicitly {@link bol.ReqDamageMonster.verify|verify} messages.
         * @param message ReqDamageMonster message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.IReqDamageMonster, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqDamageMonster message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqDamageMonster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.ReqDamageMonster;

        /**
         * Decodes a ReqDamageMonster message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqDamageMonster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.ReqDamageMonster;

        /**
         * Verifies a ReqDamageMonster message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqDamageMonster message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqDamageMonster
         */
        public static fromObject(object: { [k: string]: any }): bol.ReqDamageMonster;

        /**
         * Creates a plain object from a ReqDamageMonster message. Also converts values to other types if specified.
         * @param message ReqDamageMonster
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.ReqDamageMonster, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqDamageMonster to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NotDamageMonster. */
    interface INotDamageMonster {

        /** NotDamageMonster monsters */
        monsters?: (bol.IMonster[]|null);
    }

    /** Represents a NotDamageMonster. */
    class NotDamageMonster implements INotDamageMonster {

        /**
         * Constructs a new NotDamageMonster.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.INotDamageMonster);

        /** NotDamageMonster monsters. */
        public monsters: bol.IMonster[];

        /**
         * Creates a new NotDamageMonster instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotDamageMonster instance
         */
        public static create(properties?: bol.INotDamageMonster): bol.NotDamageMonster;

        /**
         * Encodes the specified NotDamageMonster message. Does not implicitly {@link bol.NotDamageMonster.verify|verify} messages.
         * @param message NotDamageMonster message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.INotDamageMonster, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotDamageMonster message, length delimited. Does not implicitly {@link bol.NotDamageMonster.verify|verify} messages.
         * @param message NotDamageMonster message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.INotDamageMonster, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotDamageMonster message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotDamageMonster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.NotDamageMonster;

        /**
         * Decodes a NotDamageMonster message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotDamageMonster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.NotDamageMonster;

        /**
         * Verifies a NotDamageMonster message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotDamageMonster message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotDamageMonster
         */
        public static fromObject(object: { [k: string]: any }): bol.NotDamageMonster;

        /**
         * Creates a plain object from a NotDamageMonster message. Also converts values to other types if specified.
         * @param message NotDamageMonster
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.NotDamageMonster, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotDamageMonster to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NotMonsterFlush. */
    interface INotMonsterFlush {

        /** NotMonsterFlush monsters */
        monsters?: (bol.IMonster[]|null);

        /** NotMonsterFlush camp1num */
        camp1num?: (number|null);

        /** NotMonsterFlush camp2num */
        camp2num?: (number|null);
    }

    /** Represents a NotMonsterFlush. */
    class NotMonsterFlush implements INotMonsterFlush {

        /**
         * Constructs a new NotMonsterFlush.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.INotMonsterFlush);

        /** NotMonsterFlush monsters. */
        public monsters: bol.IMonster[];

        /** NotMonsterFlush camp1num. */
        public camp1num: number;

        /** NotMonsterFlush camp2num. */
        public camp2num: number;

        /**
         * Creates a new NotMonsterFlush instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotMonsterFlush instance
         */
        public static create(properties?: bol.INotMonsterFlush): bol.NotMonsterFlush;

        /**
         * Encodes the specified NotMonsterFlush message. Does not implicitly {@link bol.NotMonsterFlush.verify|verify} messages.
         * @param message NotMonsterFlush message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.INotMonsterFlush, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotMonsterFlush message, length delimited. Does not implicitly {@link bol.NotMonsterFlush.verify|verify} messages.
         * @param message NotMonsterFlush message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.INotMonsterFlush, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotMonsterFlush message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotMonsterFlush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.NotMonsterFlush;

        /**
         * Decodes a NotMonsterFlush message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotMonsterFlush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.NotMonsterFlush;

        /**
         * Verifies a NotMonsterFlush message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotMonsterFlush message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotMonsterFlush
         */
        public static fromObject(object: { [k: string]: any }): bol.NotMonsterFlush;

        /**
         * Creates a plain object from a NotMonsterFlush message. Also converts values to other types if specified.
         * @param message NotMonsterFlush
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.NotMonsterFlush, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotMonsterFlush to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqAtkBuilding. */
    interface IReqAtkBuilding {

        /** ReqAtkBuilding damage */
        damage: number;
    }

    /** Represents a ReqAtkBuilding. */
    class ReqAtkBuilding implements IReqAtkBuilding {

        /**
         * Constructs a new ReqAtkBuilding.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.IReqAtkBuilding);

        /** ReqAtkBuilding damage. */
        public damage: number;

        /**
         * Creates a new ReqAtkBuilding instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAtkBuilding instance
         */
        public static create(properties?: bol.IReqAtkBuilding): bol.ReqAtkBuilding;

        /**
         * Encodes the specified ReqAtkBuilding message. Does not implicitly {@link bol.ReqAtkBuilding.verify|verify} messages.
         * @param message ReqAtkBuilding message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.IReqAtkBuilding, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAtkBuilding message, length delimited. Does not implicitly {@link bol.ReqAtkBuilding.verify|verify} messages.
         * @param message ReqAtkBuilding message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.IReqAtkBuilding, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAtkBuilding message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAtkBuilding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.ReqAtkBuilding;

        /**
         * Decodes a ReqAtkBuilding message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAtkBuilding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.ReqAtkBuilding;

        /**
         * Verifies a ReqAtkBuilding message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqAtkBuilding message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqAtkBuilding
         */
        public static fromObject(object: { [k: string]: any }): bol.ReqAtkBuilding;

        /**
         * Creates a plain object from a ReqAtkBuilding message. Also converts values to other types if specified.
         * @param message ReqAtkBuilding
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.ReqAtkBuilding, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqAtkBuilding to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NotBuildingHP. */
    interface INotBuildingHP {

        /** NotBuildingHP camp */
        camp: number;

        /** NotBuildingHP hp */
        hp: number;
    }

    /** Represents a NotBuildingHP. */
    class NotBuildingHP implements INotBuildingHP {

        /**
         * Constructs a new NotBuildingHP.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.INotBuildingHP);

        /** NotBuildingHP camp. */
        public camp: number;

        /** NotBuildingHP hp. */
        public hp: number;

        /**
         * Creates a new NotBuildingHP instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotBuildingHP instance
         */
        public static create(properties?: bol.INotBuildingHP): bol.NotBuildingHP;

        /**
         * Encodes the specified NotBuildingHP message. Does not implicitly {@link bol.NotBuildingHP.verify|verify} messages.
         * @param message NotBuildingHP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.INotBuildingHP, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotBuildingHP message, length delimited. Does not implicitly {@link bol.NotBuildingHP.verify|verify} messages.
         * @param message NotBuildingHP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.INotBuildingHP, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotBuildingHP message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotBuildingHP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.NotBuildingHP;

        /**
         * Decodes a NotBuildingHP message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotBuildingHP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.NotBuildingHP;

        /**
         * Verifies a NotBuildingHP message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotBuildingHP message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotBuildingHP
         */
        public static fromObject(object: { [k: string]: any }): bol.NotBuildingHP;

        /**
         * Creates a plain object from a NotBuildingHP message. Also converts values to other types if specified.
         * @param message NotBuildingHP
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.NotBuildingHP, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotBuildingHP to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NotMonsterLvUp. */
    interface INotMonsterLvUp {

        /** NotMonsterLvUp camp */
        camp: number;

        /** NotMonsterLvUp lv */
        lv: number;
    }

    /** Represents a NotMonsterLvUp. */
    class NotMonsterLvUp implements INotMonsterLvUp {

        /**
         * Constructs a new NotMonsterLvUp.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.INotMonsterLvUp);

        /** NotMonsterLvUp camp. */
        public camp: number;

        /** NotMonsterLvUp lv. */
        public lv: number;

        /**
         * Creates a new NotMonsterLvUp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotMonsterLvUp instance
         */
        public static create(properties?: bol.INotMonsterLvUp): bol.NotMonsterLvUp;

        /**
         * Encodes the specified NotMonsterLvUp message. Does not implicitly {@link bol.NotMonsterLvUp.verify|verify} messages.
         * @param message NotMonsterLvUp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.INotMonsterLvUp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotMonsterLvUp message, length delimited. Does not implicitly {@link bol.NotMonsterLvUp.verify|verify} messages.
         * @param message NotMonsterLvUp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.INotMonsterLvUp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotMonsterLvUp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotMonsterLvUp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.NotMonsterLvUp;

        /**
         * Decodes a NotMonsterLvUp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotMonsterLvUp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.NotMonsterLvUp;

        /**
         * Verifies a NotMonsterLvUp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotMonsterLvUp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotMonsterLvUp
         */
        public static fromObject(object: { [k: string]: any }): bol.NotMonsterLvUp;

        /**
         * Creates a plain object from a NotMonsterLvUp message. Also converts values to other types if specified.
         * @param message NotMonsterLvUp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.NotMonsterLvUp, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotMonsterLvUp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NotGroundInfo. */
    interface INotGroundInfo {

        /** NotGroundInfo propid */
        propid: number;
    }

    /** Represents a NotGroundInfo. */
    class NotGroundInfo implements INotGroundInfo {

        /**
         * Constructs a new NotGroundInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: bol.INotGroundInfo);

        /** NotGroundInfo propid. */
        public propid: number;

        /**
         * Creates a new NotGroundInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotGroundInfo instance
         */
        public static create(properties?: bol.INotGroundInfo): bol.NotGroundInfo;

        /**
         * Encodes the specified NotGroundInfo message. Does not implicitly {@link bol.NotGroundInfo.verify|verify} messages.
         * @param message NotGroundInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bol.INotGroundInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotGroundInfo message, length delimited. Does not implicitly {@link bol.NotGroundInfo.verify|verify} messages.
         * @param message NotGroundInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bol.INotGroundInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotGroundInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotGroundInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): bol.NotGroundInfo;

        /**
         * Decodes a NotGroundInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotGroundInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): bol.NotGroundInfo;

        /**
         * Verifies a NotGroundInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotGroundInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotGroundInfo
         */
        public static fromObject(object: { [k: string]: any }): bol.NotGroundInfo;

        /**
         * Creates a plain object from a NotGroundInfo message. Also converts values to other types if specified.
         * @param message NotGroundInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bol.NotGroundInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotGroundInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
