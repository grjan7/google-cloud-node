// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as Long from "long";
import * as $protobuf from "protobufjs";
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace gaming. */
        namespace gaming {

            /** Namespace v1beta. */
            namespace v1beta {

                /** Properties of an OperationMetadata. */
                interface IOperationMetadata {

                    /** OperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target */
                    target?: (string|null);

                    /** OperationMetadata verb */
                    verb?: (string|null);

                    /** OperationMetadata statusMessage */
                    statusMessage?: (string|null);

                    /** OperationMetadata requestedCancellation */
                    requestedCancellation?: (boolean|null);

                    /** OperationMetadata apiVersion */
                    apiVersion?: (string|null);

                    /** OperationMetadata unreachable */
                    unreachable?: (string[]|null);

                    /** OperationMetadata operationStatus */
                    operationStatus?: ({ [k: string]: google.cloud.gaming.v1beta.IOperationStatus }|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IOperationMetadata);

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target. */
                    public target: string;

                    /** OperationMetadata verb. */
                    public verb: string;

                    /** OperationMetadata statusMessage. */
                    public statusMessage: string;

                    /** OperationMetadata requestedCancellation. */
                    public requestedCancellation: boolean;

                    /** OperationMetadata apiVersion. */
                    public apiVersion: string;

                    /** OperationMetadata unreachable. */
                    public unreachable: string[];

                    /** OperationMetadata operationStatus. */
                    public operationStatus: { [k: string]: google.cloud.gaming.v1beta.IOperationStatus };

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IOperationMetadata): google.cloud.gaming.v1beta.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.gaming.v1beta.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.OperationMetadata;

                    /**
                     * Verifies an OperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OperationStatus. */
                interface IOperationStatus {

                    /** OperationStatus done */
                    done?: (boolean|null);

                    /** OperationStatus errorCode */
                    errorCode?: (google.cloud.gaming.v1beta.OperationStatus.ErrorCode|keyof typeof google.cloud.gaming.v1beta.OperationStatus.ErrorCode|null);

                    /** OperationStatus errorMessage */
                    errorMessage?: (string|null);
                }

                /** Represents an OperationStatus. */
                class OperationStatus implements IOperationStatus {

                    /**
                     * Constructs a new OperationStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IOperationStatus);

                    /** OperationStatus done. */
                    public done: boolean;

                    /** OperationStatus errorCode. */
                    public errorCode: (google.cloud.gaming.v1beta.OperationStatus.ErrorCode|keyof typeof google.cloud.gaming.v1beta.OperationStatus.ErrorCode);

                    /** OperationStatus errorMessage. */
                    public errorMessage: string;

                    /**
                     * Creates a new OperationStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationStatus instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IOperationStatus): google.cloud.gaming.v1beta.OperationStatus;

                    /**
                     * Encodes the specified OperationStatus message. Does not implicitly {@link google.cloud.gaming.v1beta.OperationStatus.verify|verify} messages.
                     * @param message OperationStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IOperationStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationStatus message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.OperationStatus.verify|verify} messages.
                     * @param message OperationStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IOperationStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.OperationStatus;

                    /**
                     * Decodes an OperationStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.OperationStatus;

                    /**
                     * Verifies an OperationStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OperationStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OperationStatus
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.OperationStatus;

                    /**
                     * Creates a plain object from an OperationStatus message. Also converts values to other types if specified.
                     * @param message OperationStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.OperationStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace OperationStatus {

                    /** ErrorCode enum. */
                    enum ErrorCode {
                        ERROR_CODE_UNSPECIFIED = 0,
                        INTERNAL_ERROR = 1,
                        PERMISSION_DENIED = 2,
                        CLUSTER_CONNECTION = 3
                    }
                }

                /** Properties of a LabelSelector. */
                interface ILabelSelector {

                    /** LabelSelector labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a LabelSelector. */
                class LabelSelector implements ILabelSelector {

                    /**
                     * Constructs a new LabelSelector.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.ILabelSelector);

                    /** LabelSelector labels. */
                    public labels: { [k: string]: string };

                    /**
                     * Creates a new LabelSelector instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LabelSelector instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.ILabelSelector): google.cloud.gaming.v1beta.LabelSelector;

                    /**
                     * Encodes the specified LabelSelector message. Does not implicitly {@link google.cloud.gaming.v1beta.LabelSelector.verify|verify} messages.
                     * @param message LabelSelector message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.ILabelSelector, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LabelSelector message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.LabelSelector.verify|verify} messages.
                     * @param message LabelSelector message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.ILabelSelector, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LabelSelector message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LabelSelector
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.LabelSelector;

                    /**
                     * Decodes a LabelSelector message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LabelSelector
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.LabelSelector;

                    /**
                     * Verifies a LabelSelector message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LabelSelector message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LabelSelector
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.LabelSelector;

                    /**
                     * Creates a plain object from a LabelSelector message. Also converts values to other types if specified.
                     * @param message LabelSelector
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.LabelSelector, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LabelSelector to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RealmSelector. */
                interface IRealmSelector {

                    /** RealmSelector realms */
                    realms?: (string[]|null);
                }

                /** Represents a RealmSelector. */
                class RealmSelector implements IRealmSelector {

                    /**
                     * Constructs a new RealmSelector.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IRealmSelector);

                    /** RealmSelector realms. */
                    public realms: string[];

                    /**
                     * Creates a new RealmSelector instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RealmSelector instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IRealmSelector): google.cloud.gaming.v1beta.RealmSelector;

                    /**
                     * Encodes the specified RealmSelector message. Does not implicitly {@link google.cloud.gaming.v1beta.RealmSelector.verify|verify} messages.
                     * @param message RealmSelector message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IRealmSelector, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RealmSelector message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.RealmSelector.verify|verify} messages.
                     * @param message RealmSelector message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IRealmSelector, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RealmSelector message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RealmSelector
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.RealmSelector;

                    /**
                     * Decodes a RealmSelector message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RealmSelector
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.RealmSelector;

                    /**
                     * Verifies a RealmSelector message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RealmSelector message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RealmSelector
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.RealmSelector;

                    /**
                     * Creates a plain object from a RealmSelector message. Also converts values to other types if specified.
                     * @param message RealmSelector
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.RealmSelector, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RealmSelector to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Schedule. */
                interface ISchedule {

                    /** Schedule startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** Schedule endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** Schedule cronJobDuration */
                    cronJobDuration?: (google.protobuf.IDuration|null);

                    /** Schedule cronSpec */
                    cronSpec?: (string|null);
                }

                /** Represents a Schedule. */
                class Schedule implements ISchedule {

                    /**
                     * Constructs a new Schedule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.ISchedule);

                    /** Schedule startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** Schedule endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** Schedule cronJobDuration. */
                    public cronJobDuration?: (google.protobuf.IDuration|null);

                    /** Schedule cronSpec. */
                    public cronSpec: string;

                    /**
                     * Creates a new Schedule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Schedule instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.ISchedule): google.cloud.gaming.v1beta.Schedule;

                    /**
                     * Encodes the specified Schedule message. Does not implicitly {@link google.cloud.gaming.v1beta.Schedule.verify|verify} messages.
                     * @param message Schedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.ISchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Schedule message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.Schedule.verify|verify} messages.
                     * @param message Schedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.ISchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Schedule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Schedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.Schedule;

                    /**
                     * Decodes a Schedule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Schedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.Schedule;

                    /**
                     * Verifies a Schedule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Schedule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Schedule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.Schedule;

                    /**
                     * Creates a plain object from a Schedule message. Also converts values to other types if specified.
                     * @param message Schedule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.Schedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Schedule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SpecSource. */
                interface ISpecSource {

                    /** SpecSource gameServerConfigName */
                    gameServerConfigName?: (string|null);

                    /** SpecSource name */
                    name?: (string|null);
                }

                /** Represents a SpecSource. */
                class SpecSource implements ISpecSource {

                    /**
                     * Constructs a new SpecSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.ISpecSource);

                    /** SpecSource gameServerConfigName. */
                    public gameServerConfigName: string;

                    /** SpecSource name. */
                    public name: string;

                    /**
                     * Creates a new SpecSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SpecSource instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.ISpecSource): google.cloud.gaming.v1beta.SpecSource;

                    /**
                     * Encodes the specified SpecSource message. Does not implicitly {@link google.cloud.gaming.v1beta.SpecSource.verify|verify} messages.
                     * @param message SpecSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.ISpecSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SpecSource message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.SpecSource.verify|verify} messages.
                     * @param message SpecSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.ISpecSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SpecSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SpecSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.SpecSource;

                    /**
                     * Decodes a SpecSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SpecSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.SpecSource;

                    /**
                     * Verifies a SpecSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SpecSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SpecSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.SpecSource;

                    /**
                     * Creates a plain object from a SpecSource message. Also converts values to other types if specified.
                     * @param message SpecSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.SpecSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SpecSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TargetDetails. */
                interface ITargetDetails {

                    /** TargetDetails gameServerClusterName */
                    gameServerClusterName?: (string|null);

                    /** TargetDetails gameServerDeploymentName */
                    gameServerDeploymentName?: (string|null);

                    /** TargetDetails fleetDetails */
                    fleetDetails?: (google.cloud.gaming.v1beta.TargetDetails.ITargetFleetDetails[]|null);
                }

                /** Represents a TargetDetails. */
                class TargetDetails implements ITargetDetails {

                    /**
                     * Constructs a new TargetDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.ITargetDetails);

                    /** TargetDetails gameServerClusterName. */
                    public gameServerClusterName: string;

                    /** TargetDetails gameServerDeploymentName. */
                    public gameServerDeploymentName: string;

                    /** TargetDetails fleetDetails. */
                    public fleetDetails: google.cloud.gaming.v1beta.TargetDetails.ITargetFleetDetails[];

                    /**
                     * Creates a new TargetDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TargetDetails instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.ITargetDetails): google.cloud.gaming.v1beta.TargetDetails;

                    /**
                     * Encodes the specified TargetDetails message. Does not implicitly {@link google.cloud.gaming.v1beta.TargetDetails.verify|verify} messages.
                     * @param message TargetDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.ITargetDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TargetDetails message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.TargetDetails.verify|verify} messages.
                     * @param message TargetDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.ITargetDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TargetDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TargetDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.TargetDetails;

                    /**
                     * Decodes a TargetDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TargetDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.TargetDetails;

                    /**
                     * Verifies a TargetDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TargetDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TargetDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.TargetDetails;

                    /**
                     * Creates a plain object from a TargetDetails message. Also converts values to other types if specified.
                     * @param message TargetDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.TargetDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TargetDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace TargetDetails {

                    /** Properties of a TargetFleetDetails. */
                    interface ITargetFleetDetails {

                        /** TargetFleetDetails fleet */
                        fleet?: (google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.ITargetFleet|null);

                        /** TargetFleetDetails autoscaler */
                        autoscaler?: (google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.ITargetFleetAutoscaler|null);
                    }

                    /** Represents a TargetFleetDetails. */
                    class TargetFleetDetails implements ITargetFleetDetails {

                        /**
                         * Constructs a new TargetFleetDetails.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.gaming.v1beta.TargetDetails.ITargetFleetDetails);

                        /** TargetFleetDetails fleet. */
                        public fleet?: (google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.ITargetFleet|null);

                        /** TargetFleetDetails autoscaler. */
                        public autoscaler?: (google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.ITargetFleetAutoscaler|null);

                        /**
                         * Creates a new TargetFleetDetails instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TargetFleetDetails instance
                         */
                        public static create(properties?: google.cloud.gaming.v1beta.TargetDetails.ITargetFleetDetails): google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails;

                        /**
                         * Encodes the specified TargetFleetDetails message. Does not implicitly {@link google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.verify|verify} messages.
                         * @param message TargetFleetDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.gaming.v1beta.TargetDetails.ITargetFleetDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TargetFleetDetails message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.verify|verify} messages.
                         * @param message TargetFleetDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.gaming.v1beta.TargetDetails.ITargetFleetDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TargetFleetDetails message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TargetFleetDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails;

                        /**
                         * Decodes a TargetFleetDetails message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TargetFleetDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails;

                        /**
                         * Verifies a TargetFleetDetails message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TargetFleetDetails message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TargetFleetDetails
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails;

                        /**
                         * Creates a plain object from a TargetFleetDetails message. Also converts values to other types if specified.
                         * @param message TargetFleetDetails
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TargetFleetDetails to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace TargetFleetDetails {

                        /** Properties of a TargetFleet. */
                        interface ITargetFleet {

                            /** TargetFleet name */
                            name?: (string|null);

                            /** TargetFleet specSource */
                            specSource?: (google.cloud.gaming.v1beta.ISpecSource|null);
                        }

                        /** Represents a TargetFleet. */
                        class TargetFleet implements ITargetFleet {

                            /**
                             * Constructs a new TargetFleet.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.ITargetFleet);

                            /** TargetFleet name. */
                            public name: string;

                            /** TargetFleet specSource. */
                            public specSource?: (google.cloud.gaming.v1beta.ISpecSource|null);

                            /**
                             * Creates a new TargetFleet instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns TargetFleet instance
                             */
                            public static create(properties?: google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.ITargetFleet): google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.TargetFleet;

                            /**
                             * Encodes the specified TargetFleet message. Does not implicitly {@link google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.TargetFleet.verify|verify} messages.
                             * @param message TargetFleet message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.ITargetFleet, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified TargetFleet message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.TargetFleet.verify|verify} messages.
                             * @param message TargetFleet message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.ITargetFleet, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a TargetFleet message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns TargetFleet
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.TargetFleet;

                            /**
                             * Decodes a TargetFleet message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns TargetFleet
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.TargetFleet;

                            /**
                             * Verifies a TargetFleet message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a TargetFleet message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns TargetFleet
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.TargetFleet;

                            /**
                             * Creates a plain object from a TargetFleet message. Also converts values to other types if specified.
                             * @param message TargetFleet
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.TargetFleet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this TargetFleet to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a TargetFleetAutoscaler. */
                        interface ITargetFleetAutoscaler {

                            /** TargetFleetAutoscaler name */
                            name?: (string|null);

                            /** TargetFleetAutoscaler specSource */
                            specSource?: (google.cloud.gaming.v1beta.ISpecSource|null);
                        }

                        /** Represents a TargetFleetAutoscaler. */
                        class TargetFleetAutoscaler implements ITargetFleetAutoscaler {

                            /**
                             * Constructs a new TargetFleetAutoscaler.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.ITargetFleetAutoscaler);

                            /** TargetFleetAutoscaler name. */
                            public name: string;

                            /** TargetFleetAutoscaler specSource. */
                            public specSource?: (google.cloud.gaming.v1beta.ISpecSource|null);

                            /**
                             * Creates a new TargetFleetAutoscaler instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns TargetFleetAutoscaler instance
                             */
                            public static create(properties?: google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.ITargetFleetAutoscaler): google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.TargetFleetAutoscaler;

                            /**
                             * Encodes the specified TargetFleetAutoscaler message. Does not implicitly {@link google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.TargetFleetAutoscaler.verify|verify} messages.
                             * @param message TargetFleetAutoscaler message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.ITargetFleetAutoscaler, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified TargetFleetAutoscaler message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.TargetFleetAutoscaler.verify|verify} messages.
                             * @param message TargetFleetAutoscaler message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.ITargetFleetAutoscaler, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a TargetFleetAutoscaler message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns TargetFleetAutoscaler
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.TargetFleetAutoscaler;

                            /**
                             * Decodes a TargetFleetAutoscaler message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns TargetFleetAutoscaler
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.TargetFleetAutoscaler;

                            /**
                             * Verifies a TargetFleetAutoscaler message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a TargetFleetAutoscaler message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns TargetFleetAutoscaler
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.TargetFleetAutoscaler;

                            /**
                             * Creates a plain object from a TargetFleetAutoscaler message. Also converts values to other types if specified.
                             * @param message TargetFleetAutoscaler
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.gaming.v1beta.TargetDetails.TargetFleetDetails.TargetFleetAutoscaler, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this TargetFleetAutoscaler to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }
                }

                /** Properties of a TargetState. */
                interface ITargetState {

                    /** TargetState details */
                    details?: (google.cloud.gaming.v1beta.ITargetDetails[]|null);
                }

                /** Represents a TargetState. */
                class TargetState implements ITargetState {

                    /**
                     * Constructs a new TargetState.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.ITargetState);

                    /** TargetState details. */
                    public details: google.cloud.gaming.v1beta.ITargetDetails[];

                    /**
                     * Creates a new TargetState instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TargetState instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.ITargetState): google.cloud.gaming.v1beta.TargetState;

                    /**
                     * Encodes the specified TargetState message. Does not implicitly {@link google.cloud.gaming.v1beta.TargetState.verify|verify} messages.
                     * @param message TargetState message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.ITargetState, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TargetState message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.TargetState.verify|verify} messages.
                     * @param message TargetState message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.ITargetState, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TargetState message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TargetState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.TargetState;

                    /**
                     * Decodes a TargetState message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TargetState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.TargetState;

                    /**
                     * Verifies a TargetState message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TargetState message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TargetState
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.TargetState;

                    /**
                     * Creates a plain object from a TargetState message. Also converts values to other types if specified.
                     * @param message TargetState
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.TargetState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TargetState to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeployedFleetDetails. */
                interface IDeployedFleetDetails {

                    /** DeployedFleetDetails deployedFleet */
                    deployedFleet?: (google.cloud.gaming.v1beta.DeployedFleetDetails.IDeployedFleet|null);

                    /** DeployedFleetDetails deployedAutoscaler */
                    deployedAutoscaler?: (google.cloud.gaming.v1beta.DeployedFleetDetails.IDeployedFleetAutoscaler|null);
                }

                /** Represents a DeployedFleetDetails. */
                class DeployedFleetDetails implements IDeployedFleetDetails {

                    /**
                     * Constructs a new DeployedFleetDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IDeployedFleetDetails);

                    /** DeployedFleetDetails deployedFleet. */
                    public deployedFleet?: (google.cloud.gaming.v1beta.DeployedFleetDetails.IDeployedFleet|null);

                    /** DeployedFleetDetails deployedAutoscaler. */
                    public deployedAutoscaler?: (google.cloud.gaming.v1beta.DeployedFleetDetails.IDeployedFleetAutoscaler|null);

                    /**
                     * Creates a new DeployedFleetDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeployedFleetDetails instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IDeployedFleetDetails): google.cloud.gaming.v1beta.DeployedFleetDetails;

                    /**
                     * Encodes the specified DeployedFleetDetails message. Does not implicitly {@link google.cloud.gaming.v1beta.DeployedFleetDetails.verify|verify} messages.
                     * @param message DeployedFleetDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IDeployedFleetDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeployedFleetDetails message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.DeployedFleetDetails.verify|verify} messages.
                     * @param message DeployedFleetDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IDeployedFleetDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeployedFleetDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeployedFleetDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.DeployedFleetDetails;

                    /**
                     * Decodes a DeployedFleetDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeployedFleetDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.DeployedFleetDetails;

                    /**
                     * Verifies a DeployedFleetDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeployedFleetDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeployedFleetDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.DeployedFleetDetails;

                    /**
                     * Creates a plain object from a DeployedFleetDetails message. Also converts values to other types if specified.
                     * @param message DeployedFleetDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.DeployedFleetDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeployedFleetDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace DeployedFleetDetails {

                    /** Properties of a DeployedFleet. */
                    interface IDeployedFleet {

                        /** DeployedFleet fleet */
                        fleet?: (string|null);

                        /** DeployedFleet fleetSpec */
                        fleetSpec?: (string|null);

                        /** DeployedFleet specSource */
                        specSource?: (google.cloud.gaming.v1beta.ISpecSource|null);

                        /** DeployedFleet status */
                        status?: (google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleet.IDeployedFleetStatus|null);
                    }

                    /** Represents a DeployedFleet. */
                    class DeployedFleet implements IDeployedFleet {

                        /**
                         * Constructs a new DeployedFleet.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.gaming.v1beta.DeployedFleetDetails.IDeployedFleet);

                        /** DeployedFleet fleet. */
                        public fleet: string;

                        /** DeployedFleet fleetSpec. */
                        public fleetSpec: string;

                        /** DeployedFleet specSource. */
                        public specSource?: (google.cloud.gaming.v1beta.ISpecSource|null);

                        /** DeployedFleet status. */
                        public status?: (google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleet.IDeployedFleetStatus|null);

                        /**
                         * Creates a new DeployedFleet instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeployedFleet instance
                         */
                        public static create(properties?: google.cloud.gaming.v1beta.DeployedFleetDetails.IDeployedFleet): google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleet;

                        /**
                         * Encodes the specified DeployedFleet message. Does not implicitly {@link google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleet.verify|verify} messages.
                         * @param message DeployedFleet message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.gaming.v1beta.DeployedFleetDetails.IDeployedFleet, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeployedFleet message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleet.verify|verify} messages.
                         * @param message DeployedFleet message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.gaming.v1beta.DeployedFleetDetails.IDeployedFleet, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeployedFleet message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeployedFleet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleet;

                        /**
                         * Decodes a DeployedFleet message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeployedFleet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleet;

                        /**
                         * Verifies a DeployedFleet message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeployedFleet message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeployedFleet
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleet;

                        /**
                         * Creates a plain object from a DeployedFleet message. Also converts values to other types if specified.
                         * @param message DeployedFleet
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeployedFleet to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace DeployedFleet {

                        /** Properties of a DeployedFleetStatus. */
                        interface IDeployedFleetStatus {

                            /** DeployedFleetStatus readyReplicas */
                            readyReplicas?: (number|Long|string|null);

                            /** DeployedFleetStatus allocatedReplicas */
                            allocatedReplicas?: (number|Long|string|null);

                            /** DeployedFleetStatus reservedReplicas */
                            reservedReplicas?: (number|Long|string|null);

                            /** DeployedFleetStatus replicas */
                            replicas?: (number|Long|string|null);
                        }

                        /** Represents a DeployedFleetStatus. */
                        class DeployedFleetStatus implements IDeployedFleetStatus {

                            /**
                             * Constructs a new DeployedFleetStatus.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleet.IDeployedFleetStatus);

                            /** DeployedFleetStatus readyReplicas. */
                            public readyReplicas: (number|Long|string);

                            /** DeployedFleetStatus allocatedReplicas. */
                            public allocatedReplicas: (number|Long|string);

                            /** DeployedFleetStatus reservedReplicas. */
                            public reservedReplicas: (number|Long|string);

                            /** DeployedFleetStatus replicas. */
                            public replicas: (number|Long|string);

                            /**
                             * Creates a new DeployedFleetStatus instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns DeployedFleetStatus instance
                             */
                            public static create(properties?: google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleet.IDeployedFleetStatus): google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleet.DeployedFleetStatus;

                            /**
                             * Encodes the specified DeployedFleetStatus message. Does not implicitly {@link google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleet.DeployedFleetStatus.verify|verify} messages.
                             * @param message DeployedFleetStatus message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleet.IDeployedFleetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified DeployedFleetStatus message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleet.DeployedFleetStatus.verify|verify} messages.
                             * @param message DeployedFleetStatus message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleet.IDeployedFleetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a DeployedFleetStatus message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns DeployedFleetStatus
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleet.DeployedFleetStatus;

                            /**
                             * Decodes a DeployedFleetStatus message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns DeployedFleetStatus
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleet.DeployedFleetStatus;

                            /**
                             * Verifies a DeployedFleetStatus message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a DeployedFleetStatus message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns DeployedFleetStatus
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleet.DeployedFleetStatus;

                            /**
                             * Creates a plain object from a DeployedFleetStatus message. Also converts values to other types if specified.
                             * @param message DeployedFleetStatus
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleet.DeployedFleetStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this DeployedFleetStatus to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of a DeployedFleetAutoscaler. */
                    interface IDeployedFleetAutoscaler {

                        /** DeployedFleetAutoscaler autoscaler */
                        autoscaler?: (string|null);

                        /** DeployedFleetAutoscaler specSource */
                        specSource?: (google.cloud.gaming.v1beta.ISpecSource|null);

                        /** DeployedFleetAutoscaler fleetAutoscalerSpec */
                        fleetAutoscalerSpec?: (string|null);
                    }

                    /** Represents a DeployedFleetAutoscaler. */
                    class DeployedFleetAutoscaler implements IDeployedFleetAutoscaler {

                        /**
                         * Constructs a new DeployedFleetAutoscaler.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.gaming.v1beta.DeployedFleetDetails.IDeployedFleetAutoscaler);

                        /** DeployedFleetAutoscaler autoscaler. */
                        public autoscaler: string;

                        /** DeployedFleetAutoscaler specSource. */
                        public specSource?: (google.cloud.gaming.v1beta.ISpecSource|null);

                        /** DeployedFleetAutoscaler fleetAutoscalerSpec. */
                        public fleetAutoscalerSpec: string;

                        /**
                         * Creates a new DeployedFleetAutoscaler instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeployedFleetAutoscaler instance
                         */
                        public static create(properties?: google.cloud.gaming.v1beta.DeployedFleetDetails.IDeployedFleetAutoscaler): google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleetAutoscaler;

                        /**
                         * Encodes the specified DeployedFleetAutoscaler message. Does not implicitly {@link google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleetAutoscaler.verify|verify} messages.
                         * @param message DeployedFleetAutoscaler message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.gaming.v1beta.DeployedFleetDetails.IDeployedFleetAutoscaler, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeployedFleetAutoscaler message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleetAutoscaler.verify|verify} messages.
                         * @param message DeployedFleetAutoscaler message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.gaming.v1beta.DeployedFleetDetails.IDeployedFleetAutoscaler, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeployedFleetAutoscaler message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeployedFleetAutoscaler
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleetAutoscaler;

                        /**
                         * Decodes a DeployedFleetAutoscaler message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeployedFleetAutoscaler
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleetAutoscaler;

                        /**
                         * Verifies a DeployedFleetAutoscaler message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeployedFleetAutoscaler message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeployedFleetAutoscaler
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleetAutoscaler;

                        /**
                         * Creates a plain object from a DeployedFleetAutoscaler message. Also converts values to other types if specified.
                         * @param message DeployedFleetAutoscaler
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.gaming.v1beta.DeployedFleetDetails.DeployedFleetAutoscaler, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeployedFleetAutoscaler to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a ListGameServerClustersRequest. */
                interface IListGameServerClustersRequest {

                    /** ListGameServerClustersRequest parent */
                    parent?: (string|null);

                    /** ListGameServerClustersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListGameServerClustersRequest pageToken */
                    pageToken?: (string|null);

                    /** ListGameServerClustersRequest filter */
                    filter?: (string|null);

                    /** ListGameServerClustersRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListGameServerClustersRequest. */
                class ListGameServerClustersRequest implements IListGameServerClustersRequest {

                    /**
                     * Constructs a new ListGameServerClustersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IListGameServerClustersRequest);

                    /** ListGameServerClustersRequest parent. */
                    public parent: string;

                    /** ListGameServerClustersRequest pageSize. */
                    public pageSize: number;

                    /** ListGameServerClustersRequest pageToken. */
                    public pageToken: string;

                    /** ListGameServerClustersRequest filter. */
                    public filter: string;

                    /** ListGameServerClustersRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListGameServerClustersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGameServerClustersRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IListGameServerClustersRequest): google.cloud.gaming.v1beta.ListGameServerClustersRequest;

                    /**
                     * Encodes the specified ListGameServerClustersRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.ListGameServerClustersRequest.verify|verify} messages.
                     * @param message ListGameServerClustersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IListGameServerClustersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGameServerClustersRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.ListGameServerClustersRequest.verify|verify} messages.
                     * @param message ListGameServerClustersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IListGameServerClustersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGameServerClustersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGameServerClustersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.ListGameServerClustersRequest;

                    /**
                     * Decodes a ListGameServerClustersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGameServerClustersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.ListGameServerClustersRequest;

                    /**
                     * Verifies a ListGameServerClustersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGameServerClustersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGameServerClustersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.ListGameServerClustersRequest;

                    /**
                     * Creates a plain object from a ListGameServerClustersRequest message. Also converts values to other types if specified.
                     * @param message ListGameServerClustersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.ListGameServerClustersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGameServerClustersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListGameServerClustersResponse. */
                interface IListGameServerClustersResponse {

                    /** ListGameServerClustersResponse gameServerClusters */
                    gameServerClusters?: (google.cloud.gaming.v1beta.IGameServerCluster[]|null);

                    /** ListGameServerClustersResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListGameServerClustersResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListGameServerClustersResponse. */
                class ListGameServerClustersResponse implements IListGameServerClustersResponse {

                    /**
                     * Constructs a new ListGameServerClustersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IListGameServerClustersResponse);

                    /** ListGameServerClustersResponse gameServerClusters. */
                    public gameServerClusters: google.cloud.gaming.v1beta.IGameServerCluster[];

                    /** ListGameServerClustersResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListGameServerClustersResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListGameServerClustersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGameServerClustersResponse instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IListGameServerClustersResponse): google.cloud.gaming.v1beta.ListGameServerClustersResponse;

                    /**
                     * Encodes the specified ListGameServerClustersResponse message. Does not implicitly {@link google.cloud.gaming.v1beta.ListGameServerClustersResponse.verify|verify} messages.
                     * @param message ListGameServerClustersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IListGameServerClustersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGameServerClustersResponse message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.ListGameServerClustersResponse.verify|verify} messages.
                     * @param message ListGameServerClustersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IListGameServerClustersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGameServerClustersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGameServerClustersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.ListGameServerClustersResponse;

                    /**
                     * Decodes a ListGameServerClustersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGameServerClustersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.ListGameServerClustersResponse;

                    /**
                     * Verifies a ListGameServerClustersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGameServerClustersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGameServerClustersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.ListGameServerClustersResponse;

                    /**
                     * Creates a plain object from a ListGameServerClustersResponse message. Also converts values to other types if specified.
                     * @param message ListGameServerClustersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.ListGameServerClustersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGameServerClustersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetGameServerClusterRequest. */
                interface IGetGameServerClusterRequest {

                    /** GetGameServerClusterRequest name */
                    name?: (string|null);
                }

                /** Represents a GetGameServerClusterRequest. */
                class GetGameServerClusterRequest implements IGetGameServerClusterRequest {

                    /**
                     * Constructs a new GetGameServerClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IGetGameServerClusterRequest);

                    /** GetGameServerClusterRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetGameServerClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetGameServerClusterRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IGetGameServerClusterRequest): google.cloud.gaming.v1beta.GetGameServerClusterRequest;

                    /**
                     * Encodes the specified GetGameServerClusterRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.GetGameServerClusterRequest.verify|verify} messages.
                     * @param message GetGameServerClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IGetGameServerClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetGameServerClusterRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.GetGameServerClusterRequest.verify|verify} messages.
                     * @param message GetGameServerClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IGetGameServerClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetGameServerClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetGameServerClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.GetGameServerClusterRequest;

                    /**
                     * Decodes a GetGameServerClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetGameServerClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.GetGameServerClusterRequest;

                    /**
                     * Verifies a GetGameServerClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetGameServerClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetGameServerClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.GetGameServerClusterRequest;

                    /**
                     * Creates a plain object from a GetGameServerClusterRequest message. Also converts values to other types if specified.
                     * @param message GetGameServerClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.GetGameServerClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetGameServerClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateGameServerClusterRequest. */
                interface ICreateGameServerClusterRequest {

                    /** CreateGameServerClusterRequest parent */
                    parent?: (string|null);

                    /** CreateGameServerClusterRequest gameServerClusterId */
                    gameServerClusterId?: (string|null);

                    /** CreateGameServerClusterRequest gameServerCluster */
                    gameServerCluster?: (google.cloud.gaming.v1beta.IGameServerCluster|null);
                }

                /** Represents a CreateGameServerClusterRequest. */
                class CreateGameServerClusterRequest implements ICreateGameServerClusterRequest {

                    /**
                     * Constructs a new CreateGameServerClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.ICreateGameServerClusterRequest);

                    /** CreateGameServerClusterRequest parent. */
                    public parent: string;

                    /** CreateGameServerClusterRequest gameServerClusterId. */
                    public gameServerClusterId: string;

                    /** CreateGameServerClusterRequest gameServerCluster. */
                    public gameServerCluster?: (google.cloud.gaming.v1beta.IGameServerCluster|null);

                    /**
                     * Creates a new CreateGameServerClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateGameServerClusterRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.ICreateGameServerClusterRequest): google.cloud.gaming.v1beta.CreateGameServerClusterRequest;

                    /**
                     * Encodes the specified CreateGameServerClusterRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.CreateGameServerClusterRequest.verify|verify} messages.
                     * @param message CreateGameServerClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.ICreateGameServerClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateGameServerClusterRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.CreateGameServerClusterRequest.verify|verify} messages.
                     * @param message CreateGameServerClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.ICreateGameServerClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateGameServerClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateGameServerClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.CreateGameServerClusterRequest;

                    /**
                     * Decodes a CreateGameServerClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateGameServerClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.CreateGameServerClusterRequest;

                    /**
                     * Verifies a CreateGameServerClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateGameServerClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateGameServerClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.CreateGameServerClusterRequest;

                    /**
                     * Creates a plain object from a CreateGameServerClusterRequest message. Also converts values to other types if specified.
                     * @param message CreateGameServerClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.CreateGameServerClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateGameServerClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PreviewCreateGameServerClusterRequest. */
                interface IPreviewCreateGameServerClusterRequest {

                    /** PreviewCreateGameServerClusterRequest parent */
                    parent?: (string|null);

                    /** PreviewCreateGameServerClusterRequest gameServerClusterId */
                    gameServerClusterId?: (string|null);

                    /** PreviewCreateGameServerClusterRequest gameServerCluster */
                    gameServerCluster?: (google.cloud.gaming.v1beta.IGameServerCluster|null);

                    /** PreviewCreateGameServerClusterRequest previewTime */
                    previewTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a PreviewCreateGameServerClusterRequest. */
                class PreviewCreateGameServerClusterRequest implements IPreviewCreateGameServerClusterRequest {

                    /**
                     * Constructs a new PreviewCreateGameServerClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IPreviewCreateGameServerClusterRequest);

                    /** PreviewCreateGameServerClusterRequest parent. */
                    public parent: string;

                    /** PreviewCreateGameServerClusterRequest gameServerClusterId. */
                    public gameServerClusterId: string;

                    /** PreviewCreateGameServerClusterRequest gameServerCluster. */
                    public gameServerCluster?: (google.cloud.gaming.v1beta.IGameServerCluster|null);

                    /** PreviewCreateGameServerClusterRequest previewTime. */
                    public previewTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new PreviewCreateGameServerClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PreviewCreateGameServerClusterRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IPreviewCreateGameServerClusterRequest): google.cloud.gaming.v1beta.PreviewCreateGameServerClusterRequest;

                    /**
                     * Encodes the specified PreviewCreateGameServerClusterRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.PreviewCreateGameServerClusterRequest.verify|verify} messages.
                     * @param message PreviewCreateGameServerClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IPreviewCreateGameServerClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PreviewCreateGameServerClusterRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.PreviewCreateGameServerClusterRequest.verify|verify} messages.
                     * @param message PreviewCreateGameServerClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IPreviewCreateGameServerClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PreviewCreateGameServerClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PreviewCreateGameServerClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.PreviewCreateGameServerClusterRequest;

                    /**
                     * Decodes a PreviewCreateGameServerClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PreviewCreateGameServerClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.PreviewCreateGameServerClusterRequest;

                    /**
                     * Verifies a PreviewCreateGameServerClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PreviewCreateGameServerClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PreviewCreateGameServerClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.PreviewCreateGameServerClusterRequest;

                    /**
                     * Creates a plain object from a PreviewCreateGameServerClusterRequest message. Also converts values to other types if specified.
                     * @param message PreviewCreateGameServerClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.PreviewCreateGameServerClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PreviewCreateGameServerClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PreviewCreateGameServerClusterResponse. */
                interface IPreviewCreateGameServerClusterResponse {

                    /** PreviewCreateGameServerClusterResponse etag */
                    etag?: (string|null);

                    /** PreviewCreateGameServerClusterResponse targetState */
                    targetState?: (google.cloud.gaming.v1beta.ITargetState|null);
                }

                /** Represents a PreviewCreateGameServerClusterResponse. */
                class PreviewCreateGameServerClusterResponse implements IPreviewCreateGameServerClusterResponse {

                    /**
                     * Constructs a new PreviewCreateGameServerClusterResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IPreviewCreateGameServerClusterResponse);

                    /** PreviewCreateGameServerClusterResponse etag. */
                    public etag: string;

                    /** PreviewCreateGameServerClusterResponse targetState. */
                    public targetState?: (google.cloud.gaming.v1beta.ITargetState|null);

                    /**
                     * Creates a new PreviewCreateGameServerClusterResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PreviewCreateGameServerClusterResponse instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IPreviewCreateGameServerClusterResponse): google.cloud.gaming.v1beta.PreviewCreateGameServerClusterResponse;

                    /**
                     * Encodes the specified PreviewCreateGameServerClusterResponse message. Does not implicitly {@link google.cloud.gaming.v1beta.PreviewCreateGameServerClusterResponse.verify|verify} messages.
                     * @param message PreviewCreateGameServerClusterResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IPreviewCreateGameServerClusterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PreviewCreateGameServerClusterResponse message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.PreviewCreateGameServerClusterResponse.verify|verify} messages.
                     * @param message PreviewCreateGameServerClusterResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IPreviewCreateGameServerClusterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PreviewCreateGameServerClusterResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PreviewCreateGameServerClusterResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.PreviewCreateGameServerClusterResponse;

                    /**
                     * Decodes a PreviewCreateGameServerClusterResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PreviewCreateGameServerClusterResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.PreviewCreateGameServerClusterResponse;

                    /**
                     * Verifies a PreviewCreateGameServerClusterResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PreviewCreateGameServerClusterResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PreviewCreateGameServerClusterResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.PreviewCreateGameServerClusterResponse;

                    /**
                     * Creates a plain object from a PreviewCreateGameServerClusterResponse message. Also converts values to other types if specified.
                     * @param message PreviewCreateGameServerClusterResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.PreviewCreateGameServerClusterResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PreviewCreateGameServerClusterResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteGameServerClusterRequest. */
                interface IDeleteGameServerClusterRequest {

                    /** DeleteGameServerClusterRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteGameServerClusterRequest. */
                class DeleteGameServerClusterRequest implements IDeleteGameServerClusterRequest {

                    /**
                     * Constructs a new DeleteGameServerClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IDeleteGameServerClusterRequest);

                    /** DeleteGameServerClusterRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteGameServerClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteGameServerClusterRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IDeleteGameServerClusterRequest): google.cloud.gaming.v1beta.DeleteGameServerClusterRequest;

                    /**
                     * Encodes the specified DeleteGameServerClusterRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.DeleteGameServerClusterRequest.verify|verify} messages.
                     * @param message DeleteGameServerClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IDeleteGameServerClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteGameServerClusterRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.DeleteGameServerClusterRequest.verify|verify} messages.
                     * @param message DeleteGameServerClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IDeleteGameServerClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteGameServerClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteGameServerClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.DeleteGameServerClusterRequest;

                    /**
                     * Decodes a DeleteGameServerClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteGameServerClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.DeleteGameServerClusterRequest;

                    /**
                     * Verifies a DeleteGameServerClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteGameServerClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteGameServerClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.DeleteGameServerClusterRequest;

                    /**
                     * Creates a plain object from a DeleteGameServerClusterRequest message. Also converts values to other types if specified.
                     * @param message DeleteGameServerClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.DeleteGameServerClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteGameServerClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PreviewDeleteGameServerClusterRequest. */
                interface IPreviewDeleteGameServerClusterRequest {

                    /** PreviewDeleteGameServerClusterRequest name */
                    name?: (string|null);

                    /** PreviewDeleteGameServerClusterRequest previewTime */
                    previewTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a PreviewDeleteGameServerClusterRequest. */
                class PreviewDeleteGameServerClusterRequest implements IPreviewDeleteGameServerClusterRequest {

                    /**
                     * Constructs a new PreviewDeleteGameServerClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IPreviewDeleteGameServerClusterRequest);

                    /** PreviewDeleteGameServerClusterRequest name. */
                    public name: string;

                    /** PreviewDeleteGameServerClusterRequest previewTime. */
                    public previewTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new PreviewDeleteGameServerClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PreviewDeleteGameServerClusterRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IPreviewDeleteGameServerClusterRequest): google.cloud.gaming.v1beta.PreviewDeleteGameServerClusterRequest;

                    /**
                     * Encodes the specified PreviewDeleteGameServerClusterRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.PreviewDeleteGameServerClusterRequest.verify|verify} messages.
                     * @param message PreviewDeleteGameServerClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IPreviewDeleteGameServerClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PreviewDeleteGameServerClusterRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.PreviewDeleteGameServerClusterRequest.verify|verify} messages.
                     * @param message PreviewDeleteGameServerClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IPreviewDeleteGameServerClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PreviewDeleteGameServerClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PreviewDeleteGameServerClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.PreviewDeleteGameServerClusterRequest;

                    /**
                     * Decodes a PreviewDeleteGameServerClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PreviewDeleteGameServerClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.PreviewDeleteGameServerClusterRequest;

                    /**
                     * Verifies a PreviewDeleteGameServerClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PreviewDeleteGameServerClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PreviewDeleteGameServerClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.PreviewDeleteGameServerClusterRequest;

                    /**
                     * Creates a plain object from a PreviewDeleteGameServerClusterRequest message. Also converts values to other types if specified.
                     * @param message PreviewDeleteGameServerClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.PreviewDeleteGameServerClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PreviewDeleteGameServerClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PreviewDeleteGameServerClusterResponse. */
                interface IPreviewDeleteGameServerClusterResponse {

                    /** PreviewDeleteGameServerClusterResponse etag */
                    etag?: (string|null);

                    /** PreviewDeleteGameServerClusterResponse targetState */
                    targetState?: (google.cloud.gaming.v1beta.ITargetState|null);
                }

                /** Represents a PreviewDeleteGameServerClusterResponse. */
                class PreviewDeleteGameServerClusterResponse implements IPreviewDeleteGameServerClusterResponse {

                    /**
                     * Constructs a new PreviewDeleteGameServerClusterResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IPreviewDeleteGameServerClusterResponse);

                    /** PreviewDeleteGameServerClusterResponse etag. */
                    public etag: string;

                    /** PreviewDeleteGameServerClusterResponse targetState. */
                    public targetState?: (google.cloud.gaming.v1beta.ITargetState|null);

                    /**
                     * Creates a new PreviewDeleteGameServerClusterResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PreviewDeleteGameServerClusterResponse instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IPreviewDeleteGameServerClusterResponse): google.cloud.gaming.v1beta.PreviewDeleteGameServerClusterResponse;

                    /**
                     * Encodes the specified PreviewDeleteGameServerClusterResponse message. Does not implicitly {@link google.cloud.gaming.v1beta.PreviewDeleteGameServerClusterResponse.verify|verify} messages.
                     * @param message PreviewDeleteGameServerClusterResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IPreviewDeleteGameServerClusterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PreviewDeleteGameServerClusterResponse message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.PreviewDeleteGameServerClusterResponse.verify|verify} messages.
                     * @param message PreviewDeleteGameServerClusterResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IPreviewDeleteGameServerClusterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PreviewDeleteGameServerClusterResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PreviewDeleteGameServerClusterResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.PreviewDeleteGameServerClusterResponse;

                    /**
                     * Decodes a PreviewDeleteGameServerClusterResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PreviewDeleteGameServerClusterResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.PreviewDeleteGameServerClusterResponse;

                    /**
                     * Verifies a PreviewDeleteGameServerClusterResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PreviewDeleteGameServerClusterResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PreviewDeleteGameServerClusterResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.PreviewDeleteGameServerClusterResponse;

                    /**
                     * Creates a plain object from a PreviewDeleteGameServerClusterResponse message. Also converts values to other types if specified.
                     * @param message PreviewDeleteGameServerClusterResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.PreviewDeleteGameServerClusterResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PreviewDeleteGameServerClusterResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateGameServerClusterRequest. */
                interface IUpdateGameServerClusterRequest {

                    /** UpdateGameServerClusterRequest gameServerCluster */
                    gameServerCluster?: (google.cloud.gaming.v1beta.IGameServerCluster|null);

                    /** UpdateGameServerClusterRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateGameServerClusterRequest. */
                class UpdateGameServerClusterRequest implements IUpdateGameServerClusterRequest {

                    /**
                     * Constructs a new UpdateGameServerClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IUpdateGameServerClusterRequest);

                    /** UpdateGameServerClusterRequest gameServerCluster. */
                    public gameServerCluster?: (google.cloud.gaming.v1beta.IGameServerCluster|null);

                    /** UpdateGameServerClusterRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateGameServerClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateGameServerClusterRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IUpdateGameServerClusterRequest): google.cloud.gaming.v1beta.UpdateGameServerClusterRequest;

                    /**
                     * Encodes the specified UpdateGameServerClusterRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.UpdateGameServerClusterRequest.verify|verify} messages.
                     * @param message UpdateGameServerClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IUpdateGameServerClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateGameServerClusterRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.UpdateGameServerClusterRequest.verify|verify} messages.
                     * @param message UpdateGameServerClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IUpdateGameServerClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateGameServerClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateGameServerClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.UpdateGameServerClusterRequest;

                    /**
                     * Decodes an UpdateGameServerClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateGameServerClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.UpdateGameServerClusterRequest;

                    /**
                     * Verifies an UpdateGameServerClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateGameServerClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateGameServerClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.UpdateGameServerClusterRequest;

                    /**
                     * Creates a plain object from an UpdateGameServerClusterRequest message. Also converts values to other types if specified.
                     * @param message UpdateGameServerClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.UpdateGameServerClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateGameServerClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PreviewUpdateGameServerClusterRequest. */
                interface IPreviewUpdateGameServerClusterRequest {

                    /** PreviewUpdateGameServerClusterRequest gameServerCluster */
                    gameServerCluster?: (google.cloud.gaming.v1beta.IGameServerCluster|null);

                    /** PreviewUpdateGameServerClusterRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** PreviewUpdateGameServerClusterRequest previewTime */
                    previewTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a PreviewUpdateGameServerClusterRequest. */
                class PreviewUpdateGameServerClusterRequest implements IPreviewUpdateGameServerClusterRequest {

                    /**
                     * Constructs a new PreviewUpdateGameServerClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IPreviewUpdateGameServerClusterRequest);

                    /** PreviewUpdateGameServerClusterRequest gameServerCluster. */
                    public gameServerCluster?: (google.cloud.gaming.v1beta.IGameServerCluster|null);

                    /** PreviewUpdateGameServerClusterRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** PreviewUpdateGameServerClusterRequest previewTime. */
                    public previewTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new PreviewUpdateGameServerClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PreviewUpdateGameServerClusterRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IPreviewUpdateGameServerClusterRequest): google.cloud.gaming.v1beta.PreviewUpdateGameServerClusterRequest;

                    /**
                     * Encodes the specified PreviewUpdateGameServerClusterRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.PreviewUpdateGameServerClusterRequest.verify|verify} messages.
                     * @param message PreviewUpdateGameServerClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IPreviewUpdateGameServerClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PreviewUpdateGameServerClusterRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.PreviewUpdateGameServerClusterRequest.verify|verify} messages.
                     * @param message PreviewUpdateGameServerClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IPreviewUpdateGameServerClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PreviewUpdateGameServerClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PreviewUpdateGameServerClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.PreviewUpdateGameServerClusterRequest;

                    /**
                     * Decodes a PreviewUpdateGameServerClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PreviewUpdateGameServerClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.PreviewUpdateGameServerClusterRequest;

                    /**
                     * Verifies a PreviewUpdateGameServerClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PreviewUpdateGameServerClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PreviewUpdateGameServerClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.PreviewUpdateGameServerClusterRequest;

                    /**
                     * Creates a plain object from a PreviewUpdateGameServerClusterRequest message. Also converts values to other types if specified.
                     * @param message PreviewUpdateGameServerClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.PreviewUpdateGameServerClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PreviewUpdateGameServerClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PreviewUpdateGameServerClusterResponse. */
                interface IPreviewUpdateGameServerClusterResponse {

                    /** PreviewUpdateGameServerClusterResponse etag */
                    etag?: (string|null);

                    /** PreviewUpdateGameServerClusterResponse targetState */
                    targetState?: (google.cloud.gaming.v1beta.ITargetState|null);
                }

                /** Represents a PreviewUpdateGameServerClusterResponse. */
                class PreviewUpdateGameServerClusterResponse implements IPreviewUpdateGameServerClusterResponse {

                    /**
                     * Constructs a new PreviewUpdateGameServerClusterResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IPreviewUpdateGameServerClusterResponse);

                    /** PreviewUpdateGameServerClusterResponse etag. */
                    public etag: string;

                    /** PreviewUpdateGameServerClusterResponse targetState. */
                    public targetState?: (google.cloud.gaming.v1beta.ITargetState|null);

                    /**
                     * Creates a new PreviewUpdateGameServerClusterResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PreviewUpdateGameServerClusterResponse instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IPreviewUpdateGameServerClusterResponse): google.cloud.gaming.v1beta.PreviewUpdateGameServerClusterResponse;

                    /**
                     * Encodes the specified PreviewUpdateGameServerClusterResponse message. Does not implicitly {@link google.cloud.gaming.v1beta.PreviewUpdateGameServerClusterResponse.verify|verify} messages.
                     * @param message PreviewUpdateGameServerClusterResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IPreviewUpdateGameServerClusterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PreviewUpdateGameServerClusterResponse message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.PreviewUpdateGameServerClusterResponse.verify|verify} messages.
                     * @param message PreviewUpdateGameServerClusterResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IPreviewUpdateGameServerClusterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PreviewUpdateGameServerClusterResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PreviewUpdateGameServerClusterResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.PreviewUpdateGameServerClusterResponse;

                    /**
                     * Decodes a PreviewUpdateGameServerClusterResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PreviewUpdateGameServerClusterResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.PreviewUpdateGameServerClusterResponse;

                    /**
                     * Verifies a PreviewUpdateGameServerClusterResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PreviewUpdateGameServerClusterResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PreviewUpdateGameServerClusterResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.PreviewUpdateGameServerClusterResponse;

                    /**
                     * Creates a plain object from a PreviewUpdateGameServerClusterResponse message. Also converts values to other types if specified.
                     * @param message PreviewUpdateGameServerClusterResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.PreviewUpdateGameServerClusterResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PreviewUpdateGameServerClusterResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GameServerClusterConnectionInfo. */
                interface IGameServerClusterConnectionInfo {

                    /** GameServerClusterConnectionInfo gkeClusterReference */
                    gkeClusterReference?: (google.cloud.gaming.v1beta.IGkeClusterReference|null);

                    /** GameServerClusterConnectionInfo namespace */
                    namespace?: (string|null);
                }

                /** Represents a GameServerClusterConnectionInfo. */
                class GameServerClusterConnectionInfo implements IGameServerClusterConnectionInfo {

                    /**
                     * Constructs a new GameServerClusterConnectionInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IGameServerClusterConnectionInfo);

                    /** GameServerClusterConnectionInfo gkeClusterReference. */
                    public gkeClusterReference?: (google.cloud.gaming.v1beta.IGkeClusterReference|null);

                    /** GameServerClusterConnectionInfo namespace. */
                    public namespace: string;

                    /** GameServerClusterConnectionInfo clusterReference. */
                    public clusterReference?: "gkeClusterReference";

                    /**
                     * Creates a new GameServerClusterConnectionInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameServerClusterConnectionInfo instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IGameServerClusterConnectionInfo): google.cloud.gaming.v1beta.GameServerClusterConnectionInfo;

                    /**
                     * Encodes the specified GameServerClusterConnectionInfo message. Does not implicitly {@link google.cloud.gaming.v1beta.GameServerClusterConnectionInfo.verify|verify} messages.
                     * @param message GameServerClusterConnectionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IGameServerClusterConnectionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameServerClusterConnectionInfo message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.GameServerClusterConnectionInfo.verify|verify} messages.
                     * @param message GameServerClusterConnectionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IGameServerClusterConnectionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameServerClusterConnectionInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GameServerClusterConnectionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.GameServerClusterConnectionInfo;

                    /**
                     * Decodes a GameServerClusterConnectionInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GameServerClusterConnectionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.GameServerClusterConnectionInfo;

                    /**
                     * Verifies a GameServerClusterConnectionInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameServerClusterConnectionInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameServerClusterConnectionInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.GameServerClusterConnectionInfo;

                    /**
                     * Creates a plain object from a GameServerClusterConnectionInfo message. Also converts values to other types if specified.
                     * @param message GameServerClusterConnectionInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.GameServerClusterConnectionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameServerClusterConnectionInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GkeClusterReference. */
                interface IGkeClusterReference {

                    /** GkeClusterReference cluster */
                    cluster?: (string|null);
                }

                /** Represents a GkeClusterReference. */
                class GkeClusterReference implements IGkeClusterReference {

                    /**
                     * Constructs a new GkeClusterReference.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IGkeClusterReference);

                    /** GkeClusterReference cluster. */
                    public cluster: string;

                    /**
                     * Creates a new GkeClusterReference instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GkeClusterReference instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IGkeClusterReference): google.cloud.gaming.v1beta.GkeClusterReference;

                    /**
                     * Encodes the specified GkeClusterReference message. Does not implicitly {@link google.cloud.gaming.v1beta.GkeClusterReference.verify|verify} messages.
                     * @param message GkeClusterReference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IGkeClusterReference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GkeClusterReference message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.GkeClusterReference.verify|verify} messages.
                     * @param message GkeClusterReference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IGkeClusterReference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GkeClusterReference message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GkeClusterReference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.GkeClusterReference;

                    /**
                     * Decodes a GkeClusterReference message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GkeClusterReference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.GkeClusterReference;

                    /**
                     * Verifies a GkeClusterReference message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GkeClusterReference message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GkeClusterReference
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.GkeClusterReference;

                    /**
                     * Creates a plain object from a GkeClusterReference message. Also converts values to other types if specified.
                     * @param message GkeClusterReference
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.GkeClusterReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GkeClusterReference to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GameServerCluster. */
                interface IGameServerCluster {

                    /** GameServerCluster name */
                    name?: (string|null);

                    /** GameServerCluster createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** GameServerCluster updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** GameServerCluster labels */
                    labels?: ({ [k: string]: string }|null);

                    /** GameServerCluster connectionInfo */
                    connectionInfo?: (google.cloud.gaming.v1beta.IGameServerClusterConnectionInfo|null);

                    /** GameServerCluster etag */
                    etag?: (string|null);

                    /** GameServerCluster description */
                    description?: (string|null);
                }

                /** Represents a GameServerCluster. */
                class GameServerCluster implements IGameServerCluster {

                    /**
                     * Constructs a new GameServerCluster.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IGameServerCluster);

                    /** GameServerCluster name. */
                    public name: string;

                    /** GameServerCluster createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** GameServerCluster updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** GameServerCluster labels. */
                    public labels: { [k: string]: string };

                    /** GameServerCluster connectionInfo. */
                    public connectionInfo?: (google.cloud.gaming.v1beta.IGameServerClusterConnectionInfo|null);

                    /** GameServerCluster etag. */
                    public etag: string;

                    /** GameServerCluster description. */
                    public description: string;

                    /**
                     * Creates a new GameServerCluster instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameServerCluster instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IGameServerCluster): google.cloud.gaming.v1beta.GameServerCluster;

                    /**
                     * Encodes the specified GameServerCluster message. Does not implicitly {@link google.cloud.gaming.v1beta.GameServerCluster.verify|verify} messages.
                     * @param message GameServerCluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IGameServerCluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameServerCluster message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.GameServerCluster.verify|verify} messages.
                     * @param message GameServerCluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IGameServerCluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameServerCluster message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GameServerCluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.GameServerCluster;

                    /**
                     * Decodes a GameServerCluster message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GameServerCluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.GameServerCluster;

                    /**
                     * Verifies a GameServerCluster message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameServerCluster message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameServerCluster
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.GameServerCluster;

                    /**
                     * Creates a plain object from a GameServerCluster message. Also converts values to other types if specified.
                     * @param message GameServerCluster
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.GameServerCluster, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameServerCluster to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Represents a GameServerClustersService */
                class GameServerClustersService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new GameServerClustersService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new GameServerClustersService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): GameServerClustersService;

                    /**
                     * Calls ListGameServerClusters.
                     * @param request ListGameServerClustersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListGameServerClustersResponse
                     */
                    public listGameServerClusters(request: google.cloud.gaming.v1beta.IListGameServerClustersRequest, callback: google.cloud.gaming.v1beta.GameServerClustersService.ListGameServerClustersCallback): void;

                    /**
                     * Calls ListGameServerClusters.
                     * @param request ListGameServerClustersRequest message or plain object
                     * @returns Promise
                     */
                    public listGameServerClusters(request: google.cloud.gaming.v1beta.IListGameServerClustersRequest): Promise<google.cloud.gaming.v1beta.ListGameServerClustersResponse>;

                    /**
                     * Calls GetGameServerCluster.
                     * @param request GetGameServerClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GameServerCluster
                     */
                    public getGameServerCluster(request: google.cloud.gaming.v1beta.IGetGameServerClusterRequest, callback: google.cloud.gaming.v1beta.GameServerClustersService.GetGameServerClusterCallback): void;

                    /**
                     * Calls GetGameServerCluster.
                     * @param request GetGameServerClusterRequest message or plain object
                     * @returns Promise
                     */
                    public getGameServerCluster(request: google.cloud.gaming.v1beta.IGetGameServerClusterRequest): Promise<google.cloud.gaming.v1beta.GameServerCluster>;

                    /**
                     * Calls CreateGameServerCluster.
                     * @param request CreateGameServerClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createGameServerCluster(request: google.cloud.gaming.v1beta.ICreateGameServerClusterRequest, callback: google.cloud.gaming.v1beta.GameServerClustersService.CreateGameServerClusterCallback): void;

                    /**
                     * Calls CreateGameServerCluster.
                     * @param request CreateGameServerClusterRequest message or plain object
                     * @returns Promise
                     */
                    public createGameServerCluster(request: google.cloud.gaming.v1beta.ICreateGameServerClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls PreviewCreateGameServerCluster.
                     * @param request PreviewCreateGameServerClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PreviewCreateGameServerClusterResponse
                     */
                    public previewCreateGameServerCluster(request: google.cloud.gaming.v1beta.IPreviewCreateGameServerClusterRequest, callback: google.cloud.gaming.v1beta.GameServerClustersService.PreviewCreateGameServerClusterCallback): void;

                    /**
                     * Calls PreviewCreateGameServerCluster.
                     * @param request PreviewCreateGameServerClusterRequest message or plain object
                     * @returns Promise
                     */
                    public previewCreateGameServerCluster(request: google.cloud.gaming.v1beta.IPreviewCreateGameServerClusterRequest): Promise<google.cloud.gaming.v1beta.PreviewCreateGameServerClusterResponse>;

                    /**
                     * Calls DeleteGameServerCluster.
                     * @param request DeleteGameServerClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteGameServerCluster(request: google.cloud.gaming.v1beta.IDeleteGameServerClusterRequest, callback: google.cloud.gaming.v1beta.GameServerClustersService.DeleteGameServerClusterCallback): void;

                    /**
                     * Calls DeleteGameServerCluster.
                     * @param request DeleteGameServerClusterRequest message or plain object
                     * @returns Promise
                     */
                    public deleteGameServerCluster(request: google.cloud.gaming.v1beta.IDeleteGameServerClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls PreviewDeleteGameServerCluster.
                     * @param request PreviewDeleteGameServerClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PreviewDeleteGameServerClusterResponse
                     */
                    public previewDeleteGameServerCluster(request: google.cloud.gaming.v1beta.IPreviewDeleteGameServerClusterRequest, callback: google.cloud.gaming.v1beta.GameServerClustersService.PreviewDeleteGameServerClusterCallback): void;

                    /**
                     * Calls PreviewDeleteGameServerCluster.
                     * @param request PreviewDeleteGameServerClusterRequest message or plain object
                     * @returns Promise
                     */
                    public previewDeleteGameServerCluster(request: google.cloud.gaming.v1beta.IPreviewDeleteGameServerClusterRequest): Promise<google.cloud.gaming.v1beta.PreviewDeleteGameServerClusterResponse>;

                    /**
                     * Calls UpdateGameServerCluster.
                     * @param request UpdateGameServerClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateGameServerCluster(request: google.cloud.gaming.v1beta.IUpdateGameServerClusterRequest, callback: google.cloud.gaming.v1beta.GameServerClustersService.UpdateGameServerClusterCallback): void;

                    /**
                     * Calls UpdateGameServerCluster.
                     * @param request UpdateGameServerClusterRequest message or plain object
                     * @returns Promise
                     */
                    public updateGameServerCluster(request: google.cloud.gaming.v1beta.IUpdateGameServerClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls PreviewUpdateGameServerCluster.
                     * @param request PreviewUpdateGameServerClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PreviewUpdateGameServerClusterResponse
                     */
                    public previewUpdateGameServerCluster(request: google.cloud.gaming.v1beta.IPreviewUpdateGameServerClusterRequest, callback: google.cloud.gaming.v1beta.GameServerClustersService.PreviewUpdateGameServerClusterCallback): void;

                    /**
                     * Calls PreviewUpdateGameServerCluster.
                     * @param request PreviewUpdateGameServerClusterRequest message or plain object
                     * @returns Promise
                     */
                    public previewUpdateGameServerCluster(request: google.cloud.gaming.v1beta.IPreviewUpdateGameServerClusterRequest): Promise<google.cloud.gaming.v1beta.PreviewUpdateGameServerClusterResponse>;
                }

                namespace GameServerClustersService {

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.GameServerClustersService#listGameServerClusters}.
                     * @param error Error, if any
                     * @param [response] ListGameServerClustersResponse
                     */
                    type ListGameServerClustersCallback = (error: (Error|null), response?: google.cloud.gaming.v1beta.ListGameServerClustersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.GameServerClustersService#getGameServerCluster}.
                     * @param error Error, if any
                     * @param [response] GameServerCluster
                     */
                    type GetGameServerClusterCallback = (error: (Error|null), response?: google.cloud.gaming.v1beta.GameServerCluster) => void;

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.GameServerClustersService#createGameServerCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateGameServerClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.GameServerClustersService#previewCreateGameServerCluster}.
                     * @param error Error, if any
                     * @param [response] PreviewCreateGameServerClusterResponse
                     */
                    type PreviewCreateGameServerClusterCallback = (error: (Error|null), response?: google.cloud.gaming.v1beta.PreviewCreateGameServerClusterResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.GameServerClustersService#deleteGameServerCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteGameServerClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.GameServerClustersService#previewDeleteGameServerCluster}.
                     * @param error Error, if any
                     * @param [response] PreviewDeleteGameServerClusterResponse
                     */
                    type PreviewDeleteGameServerClusterCallback = (error: (Error|null), response?: google.cloud.gaming.v1beta.PreviewDeleteGameServerClusterResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.GameServerClustersService#updateGameServerCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateGameServerClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.GameServerClustersService#previewUpdateGameServerCluster}.
                     * @param error Error, if any
                     * @param [response] PreviewUpdateGameServerClusterResponse
                     */
                    type PreviewUpdateGameServerClusterCallback = (error: (Error|null), response?: google.cloud.gaming.v1beta.PreviewUpdateGameServerClusterResponse) => void;
                }

                /** Properties of a ListGameServerConfigsRequest. */
                interface IListGameServerConfigsRequest {

                    /** ListGameServerConfigsRequest parent */
                    parent?: (string|null);

                    /** ListGameServerConfigsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListGameServerConfigsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListGameServerConfigsRequest filter */
                    filter?: (string|null);

                    /** ListGameServerConfigsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListGameServerConfigsRequest. */
                class ListGameServerConfigsRequest implements IListGameServerConfigsRequest {

                    /**
                     * Constructs a new ListGameServerConfigsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IListGameServerConfigsRequest);

                    /** ListGameServerConfigsRequest parent. */
                    public parent: string;

                    /** ListGameServerConfigsRequest pageSize. */
                    public pageSize: number;

                    /** ListGameServerConfigsRequest pageToken. */
                    public pageToken: string;

                    /** ListGameServerConfigsRequest filter. */
                    public filter: string;

                    /** ListGameServerConfigsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListGameServerConfigsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGameServerConfigsRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IListGameServerConfigsRequest): google.cloud.gaming.v1beta.ListGameServerConfigsRequest;

                    /**
                     * Encodes the specified ListGameServerConfigsRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.ListGameServerConfigsRequest.verify|verify} messages.
                     * @param message ListGameServerConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IListGameServerConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGameServerConfigsRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.ListGameServerConfigsRequest.verify|verify} messages.
                     * @param message ListGameServerConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IListGameServerConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGameServerConfigsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGameServerConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.ListGameServerConfigsRequest;

                    /**
                     * Decodes a ListGameServerConfigsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGameServerConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.ListGameServerConfigsRequest;

                    /**
                     * Verifies a ListGameServerConfigsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGameServerConfigsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGameServerConfigsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.ListGameServerConfigsRequest;

                    /**
                     * Creates a plain object from a ListGameServerConfigsRequest message. Also converts values to other types if specified.
                     * @param message ListGameServerConfigsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.ListGameServerConfigsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGameServerConfigsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListGameServerConfigsResponse. */
                interface IListGameServerConfigsResponse {

                    /** ListGameServerConfigsResponse gameServerConfigs */
                    gameServerConfigs?: (google.cloud.gaming.v1beta.IGameServerConfig[]|null);

                    /** ListGameServerConfigsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListGameServerConfigsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListGameServerConfigsResponse. */
                class ListGameServerConfigsResponse implements IListGameServerConfigsResponse {

                    /**
                     * Constructs a new ListGameServerConfigsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IListGameServerConfigsResponse);

                    /** ListGameServerConfigsResponse gameServerConfigs. */
                    public gameServerConfigs: google.cloud.gaming.v1beta.IGameServerConfig[];

                    /** ListGameServerConfigsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListGameServerConfigsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListGameServerConfigsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGameServerConfigsResponse instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IListGameServerConfigsResponse): google.cloud.gaming.v1beta.ListGameServerConfigsResponse;

                    /**
                     * Encodes the specified ListGameServerConfigsResponse message. Does not implicitly {@link google.cloud.gaming.v1beta.ListGameServerConfigsResponse.verify|verify} messages.
                     * @param message ListGameServerConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IListGameServerConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGameServerConfigsResponse message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.ListGameServerConfigsResponse.verify|verify} messages.
                     * @param message ListGameServerConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IListGameServerConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGameServerConfigsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGameServerConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.ListGameServerConfigsResponse;

                    /**
                     * Decodes a ListGameServerConfigsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGameServerConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.ListGameServerConfigsResponse;

                    /**
                     * Verifies a ListGameServerConfigsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGameServerConfigsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGameServerConfigsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.ListGameServerConfigsResponse;

                    /**
                     * Creates a plain object from a ListGameServerConfigsResponse message. Also converts values to other types if specified.
                     * @param message ListGameServerConfigsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.ListGameServerConfigsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGameServerConfigsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetGameServerConfigRequest. */
                interface IGetGameServerConfigRequest {

                    /** GetGameServerConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a GetGameServerConfigRequest. */
                class GetGameServerConfigRequest implements IGetGameServerConfigRequest {

                    /**
                     * Constructs a new GetGameServerConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IGetGameServerConfigRequest);

                    /** GetGameServerConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetGameServerConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetGameServerConfigRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IGetGameServerConfigRequest): google.cloud.gaming.v1beta.GetGameServerConfigRequest;

                    /**
                     * Encodes the specified GetGameServerConfigRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.GetGameServerConfigRequest.verify|verify} messages.
                     * @param message GetGameServerConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IGetGameServerConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetGameServerConfigRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.GetGameServerConfigRequest.verify|verify} messages.
                     * @param message GetGameServerConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IGetGameServerConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetGameServerConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetGameServerConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.GetGameServerConfigRequest;

                    /**
                     * Decodes a GetGameServerConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetGameServerConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.GetGameServerConfigRequest;

                    /**
                     * Verifies a GetGameServerConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetGameServerConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetGameServerConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.GetGameServerConfigRequest;

                    /**
                     * Creates a plain object from a GetGameServerConfigRequest message. Also converts values to other types if specified.
                     * @param message GetGameServerConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.GetGameServerConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetGameServerConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateGameServerConfigRequest. */
                interface ICreateGameServerConfigRequest {

                    /** CreateGameServerConfigRequest parent */
                    parent?: (string|null);

                    /** CreateGameServerConfigRequest configId */
                    configId?: (string|null);

                    /** CreateGameServerConfigRequest gameServerConfig */
                    gameServerConfig?: (google.cloud.gaming.v1beta.IGameServerConfig|null);
                }

                /** Represents a CreateGameServerConfigRequest. */
                class CreateGameServerConfigRequest implements ICreateGameServerConfigRequest {

                    /**
                     * Constructs a new CreateGameServerConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.ICreateGameServerConfigRequest);

                    /** CreateGameServerConfigRequest parent. */
                    public parent: string;

                    /** CreateGameServerConfigRequest configId. */
                    public configId: string;

                    /** CreateGameServerConfigRequest gameServerConfig. */
                    public gameServerConfig?: (google.cloud.gaming.v1beta.IGameServerConfig|null);

                    /**
                     * Creates a new CreateGameServerConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateGameServerConfigRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.ICreateGameServerConfigRequest): google.cloud.gaming.v1beta.CreateGameServerConfigRequest;

                    /**
                     * Encodes the specified CreateGameServerConfigRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.CreateGameServerConfigRequest.verify|verify} messages.
                     * @param message CreateGameServerConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.ICreateGameServerConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateGameServerConfigRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.CreateGameServerConfigRequest.verify|verify} messages.
                     * @param message CreateGameServerConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.ICreateGameServerConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateGameServerConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateGameServerConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.CreateGameServerConfigRequest;

                    /**
                     * Decodes a CreateGameServerConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateGameServerConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.CreateGameServerConfigRequest;

                    /**
                     * Verifies a CreateGameServerConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateGameServerConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateGameServerConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.CreateGameServerConfigRequest;

                    /**
                     * Creates a plain object from a CreateGameServerConfigRequest message. Also converts values to other types if specified.
                     * @param message CreateGameServerConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.CreateGameServerConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateGameServerConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteGameServerConfigRequest. */
                interface IDeleteGameServerConfigRequest {

                    /** DeleteGameServerConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteGameServerConfigRequest. */
                class DeleteGameServerConfigRequest implements IDeleteGameServerConfigRequest {

                    /**
                     * Constructs a new DeleteGameServerConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IDeleteGameServerConfigRequest);

                    /** DeleteGameServerConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteGameServerConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteGameServerConfigRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IDeleteGameServerConfigRequest): google.cloud.gaming.v1beta.DeleteGameServerConfigRequest;

                    /**
                     * Encodes the specified DeleteGameServerConfigRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.DeleteGameServerConfigRequest.verify|verify} messages.
                     * @param message DeleteGameServerConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IDeleteGameServerConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteGameServerConfigRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.DeleteGameServerConfigRequest.verify|verify} messages.
                     * @param message DeleteGameServerConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IDeleteGameServerConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteGameServerConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteGameServerConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.DeleteGameServerConfigRequest;

                    /**
                     * Decodes a DeleteGameServerConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteGameServerConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.DeleteGameServerConfigRequest;

                    /**
                     * Verifies a DeleteGameServerConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteGameServerConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteGameServerConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.DeleteGameServerConfigRequest;

                    /**
                     * Creates a plain object from a DeleteGameServerConfigRequest message. Also converts values to other types if specified.
                     * @param message DeleteGameServerConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.DeleteGameServerConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteGameServerConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ScalingConfig. */
                interface IScalingConfig {

                    /** ScalingConfig name */
                    name?: (string|null);

                    /** ScalingConfig fleetAutoscalerSpec */
                    fleetAutoscalerSpec?: (string|null);

                    /** ScalingConfig selectors */
                    selectors?: (google.cloud.gaming.v1beta.ILabelSelector[]|null);

                    /** ScalingConfig schedules */
                    schedules?: (google.cloud.gaming.v1beta.ISchedule[]|null);
                }

                /** Represents a ScalingConfig. */
                class ScalingConfig implements IScalingConfig {

                    /**
                     * Constructs a new ScalingConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IScalingConfig);

                    /** ScalingConfig name. */
                    public name: string;

                    /** ScalingConfig fleetAutoscalerSpec. */
                    public fleetAutoscalerSpec: string;

                    /** ScalingConfig selectors. */
                    public selectors: google.cloud.gaming.v1beta.ILabelSelector[];

                    /** ScalingConfig schedules. */
                    public schedules: google.cloud.gaming.v1beta.ISchedule[];

                    /**
                     * Creates a new ScalingConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScalingConfig instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IScalingConfig): google.cloud.gaming.v1beta.ScalingConfig;

                    /**
                     * Encodes the specified ScalingConfig message. Does not implicitly {@link google.cloud.gaming.v1beta.ScalingConfig.verify|verify} messages.
                     * @param message ScalingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IScalingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScalingConfig message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.ScalingConfig.verify|verify} messages.
                     * @param message ScalingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IScalingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScalingConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScalingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.ScalingConfig;

                    /**
                     * Decodes a ScalingConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScalingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.ScalingConfig;

                    /**
                     * Verifies a ScalingConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScalingConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScalingConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.ScalingConfig;

                    /**
                     * Creates a plain object from a ScalingConfig message. Also converts values to other types if specified.
                     * @param message ScalingConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.ScalingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScalingConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FleetConfig. */
                interface IFleetConfig {

                    /** FleetConfig fleetSpec */
                    fleetSpec?: (string|null);

                    /** FleetConfig name */
                    name?: (string|null);
                }

                /** Represents a FleetConfig. */
                class FleetConfig implements IFleetConfig {

                    /**
                     * Constructs a new FleetConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IFleetConfig);

                    /** FleetConfig fleetSpec. */
                    public fleetSpec: string;

                    /** FleetConfig name. */
                    public name: string;

                    /**
                     * Creates a new FleetConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FleetConfig instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IFleetConfig): google.cloud.gaming.v1beta.FleetConfig;

                    /**
                     * Encodes the specified FleetConfig message. Does not implicitly {@link google.cloud.gaming.v1beta.FleetConfig.verify|verify} messages.
                     * @param message FleetConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IFleetConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FleetConfig message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.FleetConfig.verify|verify} messages.
                     * @param message FleetConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IFleetConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FleetConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FleetConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.FleetConfig;

                    /**
                     * Decodes a FleetConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FleetConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.FleetConfig;

                    /**
                     * Verifies a FleetConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FleetConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FleetConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.FleetConfig;

                    /**
                     * Creates a plain object from a FleetConfig message. Also converts values to other types if specified.
                     * @param message FleetConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.FleetConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FleetConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GameServerConfig. */
                interface IGameServerConfig {

                    /** GameServerConfig name */
                    name?: (string|null);

                    /** GameServerConfig createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** GameServerConfig updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** GameServerConfig labels */
                    labels?: ({ [k: string]: string }|null);

                    /** GameServerConfig fleetConfigs */
                    fleetConfigs?: (google.cloud.gaming.v1beta.IFleetConfig[]|null);

                    /** GameServerConfig scalingConfigs */
                    scalingConfigs?: (google.cloud.gaming.v1beta.IScalingConfig[]|null);

                    /** GameServerConfig description */
                    description?: (string|null);
                }

                /** Represents a GameServerConfig. */
                class GameServerConfig implements IGameServerConfig {

                    /**
                     * Constructs a new GameServerConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IGameServerConfig);

                    /** GameServerConfig name. */
                    public name: string;

                    /** GameServerConfig createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** GameServerConfig updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** GameServerConfig labels. */
                    public labels: { [k: string]: string };

                    /** GameServerConfig fleetConfigs. */
                    public fleetConfigs: google.cloud.gaming.v1beta.IFleetConfig[];

                    /** GameServerConfig scalingConfigs. */
                    public scalingConfigs: google.cloud.gaming.v1beta.IScalingConfig[];

                    /** GameServerConfig description. */
                    public description: string;

                    /**
                     * Creates a new GameServerConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameServerConfig instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IGameServerConfig): google.cloud.gaming.v1beta.GameServerConfig;

                    /**
                     * Encodes the specified GameServerConfig message. Does not implicitly {@link google.cloud.gaming.v1beta.GameServerConfig.verify|verify} messages.
                     * @param message GameServerConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IGameServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameServerConfig message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.GameServerConfig.verify|verify} messages.
                     * @param message GameServerConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IGameServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameServerConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GameServerConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.GameServerConfig;

                    /**
                     * Decodes a GameServerConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GameServerConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.GameServerConfig;

                    /**
                     * Verifies a GameServerConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameServerConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameServerConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.GameServerConfig;

                    /**
                     * Creates a plain object from a GameServerConfig message. Also converts values to other types if specified.
                     * @param message GameServerConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.GameServerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameServerConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Represents a GameServerConfigsService */
                class GameServerConfigsService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new GameServerConfigsService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new GameServerConfigsService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): GameServerConfigsService;

                    /**
                     * Calls ListGameServerConfigs.
                     * @param request ListGameServerConfigsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListGameServerConfigsResponse
                     */
                    public listGameServerConfigs(request: google.cloud.gaming.v1beta.IListGameServerConfigsRequest, callback: google.cloud.gaming.v1beta.GameServerConfigsService.ListGameServerConfigsCallback): void;

                    /**
                     * Calls ListGameServerConfigs.
                     * @param request ListGameServerConfigsRequest message or plain object
                     * @returns Promise
                     */
                    public listGameServerConfigs(request: google.cloud.gaming.v1beta.IListGameServerConfigsRequest): Promise<google.cloud.gaming.v1beta.ListGameServerConfigsResponse>;

                    /**
                     * Calls GetGameServerConfig.
                     * @param request GetGameServerConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GameServerConfig
                     */
                    public getGameServerConfig(request: google.cloud.gaming.v1beta.IGetGameServerConfigRequest, callback: google.cloud.gaming.v1beta.GameServerConfigsService.GetGameServerConfigCallback): void;

                    /**
                     * Calls GetGameServerConfig.
                     * @param request GetGameServerConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getGameServerConfig(request: google.cloud.gaming.v1beta.IGetGameServerConfigRequest): Promise<google.cloud.gaming.v1beta.GameServerConfig>;

                    /**
                     * Calls CreateGameServerConfig.
                     * @param request CreateGameServerConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createGameServerConfig(request: google.cloud.gaming.v1beta.ICreateGameServerConfigRequest, callback: google.cloud.gaming.v1beta.GameServerConfigsService.CreateGameServerConfigCallback): void;

                    /**
                     * Calls CreateGameServerConfig.
                     * @param request CreateGameServerConfigRequest message or plain object
                     * @returns Promise
                     */
                    public createGameServerConfig(request: google.cloud.gaming.v1beta.ICreateGameServerConfigRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteGameServerConfig.
                     * @param request DeleteGameServerConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteGameServerConfig(request: google.cloud.gaming.v1beta.IDeleteGameServerConfigRequest, callback: google.cloud.gaming.v1beta.GameServerConfigsService.DeleteGameServerConfigCallback): void;

                    /**
                     * Calls DeleteGameServerConfig.
                     * @param request DeleteGameServerConfigRequest message or plain object
                     * @returns Promise
                     */
                    public deleteGameServerConfig(request: google.cloud.gaming.v1beta.IDeleteGameServerConfigRequest): Promise<google.longrunning.Operation>;
                }

                namespace GameServerConfigsService {

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.GameServerConfigsService#listGameServerConfigs}.
                     * @param error Error, if any
                     * @param [response] ListGameServerConfigsResponse
                     */
                    type ListGameServerConfigsCallback = (error: (Error|null), response?: google.cloud.gaming.v1beta.ListGameServerConfigsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.GameServerConfigsService#getGameServerConfig}.
                     * @param error Error, if any
                     * @param [response] GameServerConfig
                     */
                    type GetGameServerConfigCallback = (error: (Error|null), response?: google.cloud.gaming.v1beta.GameServerConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.GameServerConfigsService#createGameServerConfig}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateGameServerConfigCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.GameServerConfigsService#deleteGameServerConfig}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteGameServerConfigCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a ListGameServerDeploymentsRequest. */
                interface IListGameServerDeploymentsRequest {

                    /** ListGameServerDeploymentsRequest parent */
                    parent?: (string|null);

                    /** ListGameServerDeploymentsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListGameServerDeploymentsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListGameServerDeploymentsRequest filter */
                    filter?: (string|null);

                    /** ListGameServerDeploymentsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListGameServerDeploymentsRequest. */
                class ListGameServerDeploymentsRequest implements IListGameServerDeploymentsRequest {

                    /**
                     * Constructs a new ListGameServerDeploymentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IListGameServerDeploymentsRequest);

                    /** ListGameServerDeploymentsRequest parent. */
                    public parent: string;

                    /** ListGameServerDeploymentsRequest pageSize. */
                    public pageSize: number;

                    /** ListGameServerDeploymentsRequest pageToken. */
                    public pageToken: string;

                    /** ListGameServerDeploymentsRequest filter. */
                    public filter: string;

                    /** ListGameServerDeploymentsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListGameServerDeploymentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGameServerDeploymentsRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IListGameServerDeploymentsRequest): google.cloud.gaming.v1beta.ListGameServerDeploymentsRequest;

                    /**
                     * Encodes the specified ListGameServerDeploymentsRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.ListGameServerDeploymentsRequest.verify|verify} messages.
                     * @param message ListGameServerDeploymentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IListGameServerDeploymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGameServerDeploymentsRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.ListGameServerDeploymentsRequest.verify|verify} messages.
                     * @param message ListGameServerDeploymentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IListGameServerDeploymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGameServerDeploymentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGameServerDeploymentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.ListGameServerDeploymentsRequest;

                    /**
                     * Decodes a ListGameServerDeploymentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGameServerDeploymentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.ListGameServerDeploymentsRequest;

                    /**
                     * Verifies a ListGameServerDeploymentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGameServerDeploymentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGameServerDeploymentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.ListGameServerDeploymentsRequest;

                    /**
                     * Creates a plain object from a ListGameServerDeploymentsRequest message. Also converts values to other types if specified.
                     * @param message ListGameServerDeploymentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.ListGameServerDeploymentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGameServerDeploymentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListGameServerDeploymentsResponse. */
                interface IListGameServerDeploymentsResponse {

                    /** ListGameServerDeploymentsResponse gameServerDeployments */
                    gameServerDeployments?: (google.cloud.gaming.v1beta.IGameServerDeployment[]|null);

                    /** ListGameServerDeploymentsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListGameServerDeploymentsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListGameServerDeploymentsResponse. */
                class ListGameServerDeploymentsResponse implements IListGameServerDeploymentsResponse {

                    /**
                     * Constructs a new ListGameServerDeploymentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IListGameServerDeploymentsResponse);

                    /** ListGameServerDeploymentsResponse gameServerDeployments. */
                    public gameServerDeployments: google.cloud.gaming.v1beta.IGameServerDeployment[];

                    /** ListGameServerDeploymentsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListGameServerDeploymentsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListGameServerDeploymentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGameServerDeploymentsResponse instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IListGameServerDeploymentsResponse): google.cloud.gaming.v1beta.ListGameServerDeploymentsResponse;

                    /**
                     * Encodes the specified ListGameServerDeploymentsResponse message. Does not implicitly {@link google.cloud.gaming.v1beta.ListGameServerDeploymentsResponse.verify|verify} messages.
                     * @param message ListGameServerDeploymentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IListGameServerDeploymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGameServerDeploymentsResponse message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.ListGameServerDeploymentsResponse.verify|verify} messages.
                     * @param message ListGameServerDeploymentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IListGameServerDeploymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGameServerDeploymentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGameServerDeploymentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.ListGameServerDeploymentsResponse;

                    /**
                     * Decodes a ListGameServerDeploymentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGameServerDeploymentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.ListGameServerDeploymentsResponse;

                    /**
                     * Verifies a ListGameServerDeploymentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGameServerDeploymentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGameServerDeploymentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.ListGameServerDeploymentsResponse;

                    /**
                     * Creates a plain object from a ListGameServerDeploymentsResponse message. Also converts values to other types if specified.
                     * @param message ListGameServerDeploymentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.ListGameServerDeploymentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGameServerDeploymentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetGameServerDeploymentRequest. */
                interface IGetGameServerDeploymentRequest {

                    /** GetGameServerDeploymentRequest name */
                    name?: (string|null);
                }

                /** Represents a GetGameServerDeploymentRequest. */
                class GetGameServerDeploymentRequest implements IGetGameServerDeploymentRequest {

                    /**
                     * Constructs a new GetGameServerDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IGetGameServerDeploymentRequest);

                    /** GetGameServerDeploymentRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetGameServerDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetGameServerDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IGetGameServerDeploymentRequest): google.cloud.gaming.v1beta.GetGameServerDeploymentRequest;

                    /**
                     * Encodes the specified GetGameServerDeploymentRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.GetGameServerDeploymentRequest.verify|verify} messages.
                     * @param message GetGameServerDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IGetGameServerDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetGameServerDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.GetGameServerDeploymentRequest.verify|verify} messages.
                     * @param message GetGameServerDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IGetGameServerDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetGameServerDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetGameServerDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.GetGameServerDeploymentRequest;

                    /**
                     * Decodes a GetGameServerDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetGameServerDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.GetGameServerDeploymentRequest;

                    /**
                     * Verifies a GetGameServerDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetGameServerDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetGameServerDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.GetGameServerDeploymentRequest;

                    /**
                     * Creates a plain object from a GetGameServerDeploymentRequest message. Also converts values to other types if specified.
                     * @param message GetGameServerDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.GetGameServerDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetGameServerDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetGameServerDeploymentRolloutRequest. */
                interface IGetGameServerDeploymentRolloutRequest {

                    /** GetGameServerDeploymentRolloutRequest name */
                    name?: (string|null);
                }

                /** Represents a GetGameServerDeploymentRolloutRequest. */
                class GetGameServerDeploymentRolloutRequest implements IGetGameServerDeploymentRolloutRequest {

                    /**
                     * Constructs a new GetGameServerDeploymentRolloutRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IGetGameServerDeploymentRolloutRequest);

                    /** GetGameServerDeploymentRolloutRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetGameServerDeploymentRolloutRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetGameServerDeploymentRolloutRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IGetGameServerDeploymentRolloutRequest): google.cloud.gaming.v1beta.GetGameServerDeploymentRolloutRequest;

                    /**
                     * Encodes the specified GetGameServerDeploymentRolloutRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.GetGameServerDeploymentRolloutRequest.verify|verify} messages.
                     * @param message GetGameServerDeploymentRolloutRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IGetGameServerDeploymentRolloutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetGameServerDeploymentRolloutRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.GetGameServerDeploymentRolloutRequest.verify|verify} messages.
                     * @param message GetGameServerDeploymentRolloutRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IGetGameServerDeploymentRolloutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetGameServerDeploymentRolloutRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetGameServerDeploymentRolloutRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.GetGameServerDeploymentRolloutRequest;

                    /**
                     * Decodes a GetGameServerDeploymentRolloutRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetGameServerDeploymentRolloutRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.GetGameServerDeploymentRolloutRequest;

                    /**
                     * Verifies a GetGameServerDeploymentRolloutRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetGameServerDeploymentRolloutRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetGameServerDeploymentRolloutRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.GetGameServerDeploymentRolloutRequest;

                    /**
                     * Creates a plain object from a GetGameServerDeploymentRolloutRequest message. Also converts values to other types if specified.
                     * @param message GetGameServerDeploymentRolloutRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.GetGameServerDeploymentRolloutRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetGameServerDeploymentRolloutRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateGameServerDeploymentRequest. */
                interface ICreateGameServerDeploymentRequest {

                    /** CreateGameServerDeploymentRequest parent */
                    parent?: (string|null);

                    /** CreateGameServerDeploymentRequest deploymentId */
                    deploymentId?: (string|null);

                    /** CreateGameServerDeploymentRequest gameServerDeployment */
                    gameServerDeployment?: (google.cloud.gaming.v1beta.IGameServerDeployment|null);
                }

                /** Represents a CreateGameServerDeploymentRequest. */
                class CreateGameServerDeploymentRequest implements ICreateGameServerDeploymentRequest {

                    /**
                     * Constructs a new CreateGameServerDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.ICreateGameServerDeploymentRequest);

                    /** CreateGameServerDeploymentRequest parent. */
                    public parent: string;

                    /** CreateGameServerDeploymentRequest deploymentId. */
                    public deploymentId: string;

                    /** CreateGameServerDeploymentRequest gameServerDeployment. */
                    public gameServerDeployment?: (google.cloud.gaming.v1beta.IGameServerDeployment|null);

                    /**
                     * Creates a new CreateGameServerDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateGameServerDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.ICreateGameServerDeploymentRequest): google.cloud.gaming.v1beta.CreateGameServerDeploymentRequest;

                    /**
                     * Encodes the specified CreateGameServerDeploymentRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.CreateGameServerDeploymentRequest.verify|verify} messages.
                     * @param message CreateGameServerDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.ICreateGameServerDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateGameServerDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.CreateGameServerDeploymentRequest.verify|verify} messages.
                     * @param message CreateGameServerDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.ICreateGameServerDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateGameServerDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateGameServerDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.CreateGameServerDeploymentRequest;

                    /**
                     * Decodes a CreateGameServerDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateGameServerDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.CreateGameServerDeploymentRequest;

                    /**
                     * Verifies a CreateGameServerDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateGameServerDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateGameServerDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.CreateGameServerDeploymentRequest;

                    /**
                     * Creates a plain object from a CreateGameServerDeploymentRequest message. Also converts values to other types if specified.
                     * @param message CreateGameServerDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.CreateGameServerDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateGameServerDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteGameServerDeploymentRequest. */
                interface IDeleteGameServerDeploymentRequest {

                    /** DeleteGameServerDeploymentRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteGameServerDeploymentRequest. */
                class DeleteGameServerDeploymentRequest implements IDeleteGameServerDeploymentRequest {

                    /**
                     * Constructs a new DeleteGameServerDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IDeleteGameServerDeploymentRequest);

                    /** DeleteGameServerDeploymentRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteGameServerDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteGameServerDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IDeleteGameServerDeploymentRequest): google.cloud.gaming.v1beta.DeleteGameServerDeploymentRequest;

                    /**
                     * Encodes the specified DeleteGameServerDeploymentRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.DeleteGameServerDeploymentRequest.verify|verify} messages.
                     * @param message DeleteGameServerDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IDeleteGameServerDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteGameServerDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.DeleteGameServerDeploymentRequest.verify|verify} messages.
                     * @param message DeleteGameServerDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IDeleteGameServerDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteGameServerDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteGameServerDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.DeleteGameServerDeploymentRequest;

                    /**
                     * Decodes a DeleteGameServerDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteGameServerDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.DeleteGameServerDeploymentRequest;

                    /**
                     * Verifies a DeleteGameServerDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteGameServerDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteGameServerDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.DeleteGameServerDeploymentRequest;

                    /**
                     * Creates a plain object from a DeleteGameServerDeploymentRequest message. Also converts values to other types if specified.
                     * @param message DeleteGameServerDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.DeleteGameServerDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteGameServerDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateGameServerDeploymentRequest. */
                interface IUpdateGameServerDeploymentRequest {

                    /** UpdateGameServerDeploymentRequest gameServerDeployment */
                    gameServerDeployment?: (google.cloud.gaming.v1beta.IGameServerDeployment|null);

                    /** UpdateGameServerDeploymentRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateGameServerDeploymentRequest. */
                class UpdateGameServerDeploymentRequest implements IUpdateGameServerDeploymentRequest {

                    /**
                     * Constructs a new UpdateGameServerDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IUpdateGameServerDeploymentRequest);

                    /** UpdateGameServerDeploymentRequest gameServerDeployment. */
                    public gameServerDeployment?: (google.cloud.gaming.v1beta.IGameServerDeployment|null);

                    /** UpdateGameServerDeploymentRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateGameServerDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateGameServerDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IUpdateGameServerDeploymentRequest): google.cloud.gaming.v1beta.UpdateGameServerDeploymentRequest;

                    /**
                     * Encodes the specified UpdateGameServerDeploymentRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.UpdateGameServerDeploymentRequest.verify|verify} messages.
                     * @param message UpdateGameServerDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IUpdateGameServerDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateGameServerDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.UpdateGameServerDeploymentRequest.verify|verify} messages.
                     * @param message UpdateGameServerDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IUpdateGameServerDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateGameServerDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateGameServerDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.UpdateGameServerDeploymentRequest;

                    /**
                     * Decodes an UpdateGameServerDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateGameServerDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.UpdateGameServerDeploymentRequest;

                    /**
                     * Verifies an UpdateGameServerDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateGameServerDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateGameServerDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.UpdateGameServerDeploymentRequest;

                    /**
                     * Creates a plain object from an UpdateGameServerDeploymentRequest message. Also converts values to other types if specified.
                     * @param message UpdateGameServerDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.UpdateGameServerDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateGameServerDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateGameServerDeploymentRolloutRequest. */
                interface IUpdateGameServerDeploymentRolloutRequest {

                    /** UpdateGameServerDeploymentRolloutRequest rollout */
                    rollout?: (google.cloud.gaming.v1beta.IGameServerDeploymentRollout|null);

                    /** UpdateGameServerDeploymentRolloutRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateGameServerDeploymentRolloutRequest. */
                class UpdateGameServerDeploymentRolloutRequest implements IUpdateGameServerDeploymentRolloutRequest {

                    /**
                     * Constructs a new UpdateGameServerDeploymentRolloutRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IUpdateGameServerDeploymentRolloutRequest);

                    /** UpdateGameServerDeploymentRolloutRequest rollout. */
                    public rollout?: (google.cloud.gaming.v1beta.IGameServerDeploymentRollout|null);

                    /** UpdateGameServerDeploymentRolloutRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateGameServerDeploymentRolloutRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateGameServerDeploymentRolloutRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IUpdateGameServerDeploymentRolloutRequest): google.cloud.gaming.v1beta.UpdateGameServerDeploymentRolloutRequest;

                    /**
                     * Encodes the specified UpdateGameServerDeploymentRolloutRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.UpdateGameServerDeploymentRolloutRequest.verify|verify} messages.
                     * @param message UpdateGameServerDeploymentRolloutRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IUpdateGameServerDeploymentRolloutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateGameServerDeploymentRolloutRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.UpdateGameServerDeploymentRolloutRequest.verify|verify} messages.
                     * @param message UpdateGameServerDeploymentRolloutRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IUpdateGameServerDeploymentRolloutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateGameServerDeploymentRolloutRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateGameServerDeploymentRolloutRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.UpdateGameServerDeploymentRolloutRequest;

                    /**
                     * Decodes an UpdateGameServerDeploymentRolloutRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateGameServerDeploymentRolloutRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.UpdateGameServerDeploymentRolloutRequest;

                    /**
                     * Verifies an UpdateGameServerDeploymentRolloutRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateGameServerDeploymentRolloutRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateGameServerDeploymentRolloutRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.UpdateGameServerDeploymentRolloutRequest;

                    /**
                     * Creates a plain object from an UpdateGameServerDeploymentRolloutRequest message. Also converts values to other types if specified.
                     * @param message UpdateGameServerDeploymentRolloutRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.UpdateGameServerDeploymentRolloutRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateGameServerDeploymentRolloutRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FetchDeploymentStateRequest. */
                interface IFetchDeploymentStateRequest {

                    /** FetchDeploymentStateRequest name */
                    name?: (string|null);
                }

                /** Represents a FetchDeploymentStateRequest. */
                class FetchDeploymentStateRequest implements IFetchDeploymentStateRequest {

                    /**
                     * Constructs a new FetchDeploymentStateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IFetchDeploymentStateRequest);

                    /** FetchDeploymentStateRequest name. */
                    public name: string;

                    /**
                     * Creates a new FetchDeploymentStateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FetchDeploymentStateRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IFetchDeploymentStateRequest): google.cloud.gaming.v1beta.FetchDeploymentStateRequest;

                    /**
                     * Encodes the specified FetchDeploymentStateRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.FetchDeploymentStateRequest.verify|verify} messages.
                     * @param message FetchDeploymentStateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IFetchDeploymentStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FetchDeploymentStateRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.FetchDeploymentStateRequest.verify|verify} messages.
                     * @param message FetchDeploymentStateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IFetchDeploymentStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FetchDeploymentStateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FetchDeploymentStateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.FetchDeploymentStateRequest;

                    /**
                     * Decodes a FetchDeploymentStateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FetchDeploymentStateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.FetchDeploymentStateRequest;

                    /**
                     * Verifies a FetchDeploymentStateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FetchDeploymentStateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FetchDeploymentStateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.FetchDeploymentStateRequest;

                    /**
                     * Creates a plain object from a FetchDeploymentStateRequest message. Also converts values to other types if specified.
                     * @param message FetchDeploymentStateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.FetchDeploymentStateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FetchDeploymentStateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FetchDeploymentStateResponse. */
                interface IFetchDeploymentStateResponse {

                    /** FetchDeploymentStateResponse clusterState */
                    clusterState?: (google.cloud.gaming.v1beta.FetchDeploymentStateResponse.IDeployedClusterState[]|null);

                    /** FetchDeploymentStateResponse unavailable */
                    unavailable?: (string[]|null);
                }

                /** Represents a FetchDeploymentStateResponse. */
                class FetchDeploymentStateResponse implements IFetchDeploymentStateResponse {

                    /**
                     * Constructs a new FetchDeploymentStateResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IFetchDeploymentStateResponse);

                    /** FetchDeploymentStateResponse clusterState. */
                    public clusterState: google.cloud.gaming.v1beta.FetchDeploymentStateResponse.IDeployedClusterState[];

                    /** FetchDeploymentStateResponse unavailable. */
                    public unavailable: string[];

                    /**
                     * Creates a new FetchDeploymentStateResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FetchDeploymentStateResponse instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IFetchDeploymentStateResponse): google.cloud.gaming.v1beta.FetchDeploymentStateResponse;

                    /**
                     * Encodes the specified FetchDeploymentStateResponse message. Does not implicitly {@link google.cloud.gaming.v1beta.FetchDeploymentStateResponse.verify|verify} messages.
                     * @param message FetchDeploymentStateResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IFetchDeploymentStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FetchDeploymentStateResponse message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.FetchDeploymentStateResponse.verify|verify} messages.
                     * @param message FetchDeploymentStateResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IFetchDeploymentStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FetchDeploymentStateResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FetchDeploymentStateResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.FetchDeploymentStateResponse;

                    /**
                     * Decodes a FetchDeploymentStateResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FetchDeploymentStateResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.FetchDeploymentStateResponse;

                    /**
                     * Verifies a FetchDeploymentStateResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FetchDeploymentStateResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FetchDeploymentStateResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.FetchDeploymentStateResponse;

                    /**
                     * Creates a plain object from a FetchDeploymentStateResponse message. Also converts values to other types if specified.
                     * @param message FetchDeploymentStateResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.FetchDeploymentStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FetchDeploymentStateResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace FetchDeploymentStateResponse {

                    /** Properties of a DeployedClusterState. */
                    interface IDeployedClusterState {

                        /** DeployedClusterState cluster */
                        cluster?: (string|null);

                        /** DeployedClusterState fleetDetails */
                        fleetDetails?: (google.cloud.gaming.v1beta.IDeployedFleetDetails[]|null);
                    }

                    /** Represents a DeployedClusterState. */
                    class DeployedClusterState implements IDeployedClusterState {

                        /**
                         * Constructs a new DeployedClusterState.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.gaming.v1beta.FetchDeploymentStateResponse.IDeployedClusterState);

                        /** DeployedClusterState cluster. */
                        public cluster: string;

                        /** DeployedClusterState fleetDetails. */
                        public fleetDetails: google.cloud.gaming.v1beta.IDeployedFleetDetails[];

                        /**
                         * Creates a new DeployedClusterState instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeployedClusterState instance
                         */
                        public static create(properties?: google.cloud.gaming.v1beta.FetchDeploymentStateResponse.IDeployedClusterState): google.cloud.gaming.v1beta.FetchDeploymentStateResponse.DeployedClusterState;

                        /**
                         * Encodes the specified DeployedClusterState message. Does not implicitly {@link google.cloud.gaming.v1beta.FetchDeploymentStateResponse.DeployedClusterState.verify|verify} messages.
                         * @param message DeployedClusterState message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.gaming.v1beta.FetchDeploymentStateResponse.IDeployedClusterState, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeployedClusterState message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.FetchDeploymentStateResponse.DeployedClusterState.verify|verify} messages.
                         * @param message DeployedClusterState message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.gaming.v1beta.FetchDeploymentStateResponse.IDeployedClusterState, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeployedClusterState message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeployedClusterState
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.FetchDeploymentStateResponse.DeployedClusterState;

                        /**
                         * Decodes a DeployedClusterState message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeployedClusterState
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.FetchDeploymentStateResponse.DeployedClusterState;

                        /**
                         * Verifies a DeployedClusterState message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeployedClusterState message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeployedClusterState
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.FetchDeploymentStateResponse.DeployedClusterState;

                        /**
                         * Creates a plain object from a DeployedClusterState message. Also converts values to other types if specified.
                         * @param message DeployedClusterState
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.gaming.v1beta.FetchDeploymentStateResponse.DeployedClusterState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeployedClusterState to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a GameServerDeployment. */
                interface IGameServerDeployment {

                    /** GameServerDeployment name */
                    name?: (string|null);

                    /** GameServerDeployment createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** GameServerDeployment updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** GameServerDeployment labels */
                    labels?: ({ [k: string]: string }|null);

                    /** GameServerDeployment etag */
                    etag?: (string|null);

                    /** GameServerDeployment description */
                    description?: (string|null);
                }

                /** Represents a GameServerDeployment. */
                class GameServerDeployment implements IGameServerDeployment {

                    /**
                     * Constructs a new GameServerDeployment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IGameServerDeployment);

                    /** GameServerDeployment name. */
                    public name: string;

                    /** GameServerDeployment createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** GameServerDeployment updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** GameServerDeployment labels. */
                    public labels: { [k: string]: string };

                    /** GameServerDeployment etag. */
                    public etag: string;

                    /** GameServerDeployment description. */
                    public description: string;

                    /**
                     * Creates a new GameServerDeployment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameServerDeployment instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IGameServerDeployment): google.cloud.gaming.v1beta.GameServerDeployment;

                    /**
                     * Encodes the specified GameServerDeployment message. Does not implicitly {@link google.cloud.gaming.v1beta.GameServerDeployment.verify|verify} messages.
                     * @param message GameServerDeployment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IGameServerDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameServerDeployment message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.GameServerDeployment.verify|verify} messages.
                     * @param message GameServerDeployment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IGameServerDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameServerDeployment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GameServerDeployment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.GameServerDeployment;

                    /**
                     * Decodes a GameServerDeployment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GameServerDeployment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.GameServerDeployment;

                    /**
                     * Verifies a GameServerDeployment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameServerDeployment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameServerDeployment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.GameServerDeployment;

                    /**
                     * Creates a plain object from a GameServerDeployment message. Also converts values to other types if specified.
                     * @param message GameServerDeployment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.GameServerDeployment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameServerDeployment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GameServerConfigOverride. */
                interface IGameServerConfigOverride {

                    /** GameServerConfigOverride realmsSelector */
                    realmsSelector?: (google.cloud.gaming.v1beta.IRealmSelector|null);

                    /** GameServerConfigOverride configVersion */
                    configVersion?: (string|null);
                }

                /** Represents a GameServerConfigOverride. */
                class GameServerConfigOverride implements IGameServerConfigOverride {

                    /**
                     * Constructs a new GameServerConfigOverride.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IGameServerConfigOverride);

                    /** GameServerConfigOverride realmsSelector. */
                    public realmsSelector?: (google.cloud.gaming.v1beta.IRealmSelector|null);

                    /** GameServerConfigOverride configVersion. */
                    public configVersion: string;

                    /** GameServerConfigOverride selector. */
                    public selector?: "realmsSelector";

                    /** GameServerConfigOverride change. */
                    public change?: "configVersion";

                    /**
                     * Creates a new GameServerConfigOverride instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameServerConfigOverride instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IGameServerConfigOverride): google.cloud.gaming.v1beta.GameServerConfigOverride;

                    /**
                     * Encodes the specified GameServerConfigOverride message. Does not implicitly {@link google.cloud.gaming.v1beta.GameServerConfigOverride.verify|verify} messages.
                     * @param message GameServerConfigOverride message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IGameServerConfigOverride, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameServerConfigOverride message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.GameServerConfigOverride.verify|verify} messages.
                     * @param message GameServerConfigOverride message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IGameServerConfigOverride, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameServerConfigOverride message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GameServerConfigOverride
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.GameServerConfigOverride;

                    /**
                     * Decodes a GameServerConfigOverride message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GameServerConfigOverride
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.GameServerConfigOverride;

                    /**
                     * Verifies a GameServerConfigOverride message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameServerConfigOverride message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameServerConfigOverride
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.GameServerConfigOverride;

                    /**
                     * Creates a plain object from a GameServerConfigOverride message. Also converts values to other types if specified.
                     * @param message GameServerConfigOverride
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.GameServerConfigOverride, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameServerConfigOverride to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GameServerDeploymentRollout. */
                interface IGameServerDeploymentRollout {

                    /** GameServerDeploymentRollout name */
                    name?: (string|null);

                    /** GameServerDeploymentRollout createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** GameServerDeploymentRollout updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** GameServerDeploymentRollout defaultGameServerConfig */
                    defaultGameServerConfig?: (string|null);

                    /** GameServerDeploymentRollout gameServerConfigOverrides */
                    gameServerConfigOverrides?: (google.cloud.gaming.v1beta.IGameServerConfigOverride[]|null);

                    /** GameServerDeploymentRollout etag */
                    etag?: (string|null);
                }

                /** Represents a GameServerDeploymentRollout. */
                class GameServerDeploymentRollout implements IGameServerDeploymentRollout {

                    /**
                     * Constructs a new GameServerDeploymentRollout.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IGameServerDeploymentRollout);

                    /** GameServerDeploymentRollout name. */
                    public name: string;

                    /** GameServerDeploymentRollout createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** GameServerDeploymentRollout updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** GameServerDeploymentRollout defaultGameServerConfig. */
                    public defaultGameServerConfig: string;

                    /** GameServerDeploymentRollout gameServerConfigOverrides. */
                    public gameServerConfigOverrides: google.cloud.gaming.v1beta.IGameServerConfigOverride[];

                    /** GameServerDeploymentRollout etag. */
                    public etag: string;

                    /**
                     * Creates a new GameServerDeploymentRollout instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameServerDeploymentRollout instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IGameServerDeploymentRollout): google.cloud.gaming.v1beta.GameServerDeploymentRollout;

                    /**
                     * Encodes the specified GameServerDeploymentRollout message. Does not implicitly {@link google.cloud.gaming.v1beta.GameServerDeploymentRollout.verify|verify} messages.
                     * @param message GameServerDeploymentRollout message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IGameServerDeploymentRollout, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameServerDeploymentRollout message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.GameServerDeploymentRollout.verify|verify} messages.
                     * @param message GameServerDeploymentRollout message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IGameServerDeploymentRollout, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameServerDeploymentRollout message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GameServerDeploymentRollout
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.GameServerDeploymentRollout;

                    /**
                     * Decodes a GameServerDeploymentRollout message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GameServerDeploymentRollout
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.GameServerDeploymentRollout;

                    /**
                     * Verifies a GameServerDeploymentRollout message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameServerDeploymentRollout message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameServerDeploymentRollout
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.GameServerDeploymentRollout;

                    /**
                     * Creates a plain object from a GameServerDeploymentRollout message. Also converts values to other types if specified.
                     * @param message GameServerDeploymentRollout
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.GameServerDeploymentRollout, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameServerDeploymentRollout to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PreviewGameServerDeploymentRolloutRequest. */
                interface IPreviewGameServerDeploymentRolloutRequest {

                    /** PreviewGameServerDeploymentRolloutRequest rollout */
                    rollout?: (google.cloud.gaming.v1beta.IGameServerDeploymentRollout|null);

                    /** PreviewGameServerDeploymentRolloutRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** PreviewGameServerDeploymentRolloutRequest previewTime */
                    previewTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a PreviewGameServerDeploymentRolloutRequest. */
                class PreviewGameServerDeploymentRolloutRequest implements IPreviewGameServerDeploymentRolloutRequest {

                    /**
                     * Constructs a new PreviewGameServerDeploymentRolloutRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IPreviewGameServerDeploymentRolloutRequest);

                    /** PreviewGameServerDeploymentRolloutRequest rollout. */
                    public rollout?: (google.cloud.gaming.v1beta.IGameServerDeploymentRollout|null);

                    /** PreviewGameServerDeploymentRolloutRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** PreviewGameServerDeploymentRolloutRequest previewTime. */
                    public previewTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new PreviewGameServerDeploymentRolloutRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PreviewGameServerDeploymentRolloutRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IPreviewGameServerDeploymentRolloutRequest): google.cloud.gaming.v1beta.PreviewGameServerDeploymentRolloutRequest;

                    /**
                     * Encodes the specified PreviewGameServerDeploymentRolloutRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.PreviewGameServerDeploymentRolloutRequest.verify|verify} messages.
                     * @param message PreviewGameServerDeploymentRolloutRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IPreviewGameServerDeploymentRolloutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PreviewGameServerDeploymentRolloutRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.PreviewGameServerDeploymentRolloutRequest.verify|verify} messages.
                     * @param message PreviewGameServerDeploymentRolloutRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IPreviewGameServerDeploymentRolloutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PreviewGameServerDeploymentRolloutRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PreviewGameServerDeploymentRolloutRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.PreviewGameServerDeploymentRolloutRequest;

                    /**
                     * Decodes a PreviewGameServerDeploymentRolloutRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PreviewGameServerDeploymentRolloutRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.PreviewGameServerDeploymentRolloutRequest;

                    /**
                     * Verifies a PreviewGameServerDeploymentRolloutRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PreviewGameServerDeploymentRolloutRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PreviewGameServerDeploymentRolloutRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.PreviewGameServerDeploymentRolloutRequest;

                    /**
                     * Creates a plain object from a PreviewGameServerDeploymentRolloutRequest message. Also converts values to other types if specified.
                     * @param message PreviewGameServerDeploymentRolloutRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.PreviewGameServerDeploymentRolloutRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PreviewGameServerDeploymentRolloutRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PreviewGameServerDeploymentRolloutResponse. */
                interface IPreviewGameServerDeploymentRolloutResponse {

                    /** PreviewGameServerDeploymentRolloutResponse unavailable */
                    unavailable?: (string[]|null);

                    /** PreviewGameServerDeploymentRolloutResponse etag */
                    etag?: (string|null);

                    /** PreviewGameServerDeploymentRolloutResponse targetState */
                    targetState?: (google.cloud.gaming.v1beta.ITargetState|null);
                }

                /** Represents a PreviewGameServerDeploymentRolloutResponse. */
                class PreviewGameServerDeploymentRolloutResponse implements IPreviewGameServerDeploymentRolloutResponse {

                    /**
                     * Constructs a new PreviewGameServerDeploymentRolloutResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IPreviewGameServerDeploymentRolloutResponse);

                    /** PreviewGameServerDeploymentRolloutResponse unavailable. */
                    public unavailable: string[];

                    /** PreviewGameServerDeploymentRolloutResponse etag. */
                    public etag: string;

                    /** PreviewGameServerDeploymentRolloutResponse targetState. */
                    public targetState?: (google.cloud.gaming.v1beta.ITargetState|null);

                    /**
                     * Creates a new PreviewGameServerDeploymentRolloutResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PreviewGameServerDeploymentRolloutResponse instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IPreviewGameServerDeploymentRolloutResponse): google.cloud.gaming.v1beta.PreviewGameServerDeploymentRolloutResponse;

                    /**
                     * Encodes the specified PreviewGameServerDeploymentRolloutResponse message. Does not implicitly {@link google.cloud.gaming.v1beta.PreviewGameServerDeploymentRolloutResponse.verify|verify} messages.
                     * @param message PreviewGameServerDeploymentRolloutResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IPreviewGameServerDeploymentRolloutResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PreviewGameServerDeploymentRolloutResponse message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.PreviewGameServerDeploymentRolloutResponse.verify|verify} messages.
                     * @param message PreviewGameServerDeploymentRolloutResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IPreviewGameServerDeploymentRolloutResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PreviewGameServerDeploymentRolloutResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PreviewGameServerDeploymentRolloutResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.PreviewGameServerDeploymentRolloutResponse;

                    /**
                     * Decodes a PreviewGameServerDeploymentRolloutResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PreviewGameServerDeploymentRolloutResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.PreviewGameServerDeploymentRolloutResponse;

                    /**
                     * Verifies a PreviewGameServerDeploymentRolloutResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PreviewGameServerDeploymentRolloutResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PreviewGameServerDeploymentRolloutResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.PreviewGameServerDeploymentRolloutResponse;

                    /**
                     * Creates a plain object from a PreviewGameServerDeploymentRolloutResponse message. Also converts values to other types if specified.
                     * @param message PreviewGameServerDeploymentRolloutResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.PreviewGameServerDeploymentRolloutResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PreviewGameServerDeploymentRolloutResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Represents a GameServerDeploymentsService */
                class GameServerDeploymentsService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new GameServerDeploymentsService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new GameServerDeploymentsService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): GameServerDeploymentsService;

                    /**
                     * Calls ListGameServerDeployments.
                     * @param request ListGameServerDeploymentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListGameServerDeploymentsResponse
                     */
                    public listGameServerDeployments(request: google.cloud.gaming.v1beta.IListGameServerDeploymentsRequest, callback: google.cloud.gaming.v1beta.GameServerDeploymentsService.ListGameServerDeploymentsCallback): void;

                    /**
                     * Calls ListGameServerDeployments.
                     * @param request ListGameServerDeploymentsRequest message or plain object
                     * @returns Promise
                     */
                    public listGameServerDeployments(request: google.cloud.gaming.v1beta.IListGameServerDeploymentsRequest): Promise<google.cloud.gaming.v1beta.ListGameServerDeploymentsResponse>;

                    /**
                     * Calls GetGameServerDeployment.
                     * @param request GetGameServerDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GameServerDeployment
                     */
                    public getGameServerDeployment(request: google.cloud.gaming.v1beta.IGetGameServerDeploymentRequest, callback: google.cloud.gaming.v1beta.GameServerDeploymentsService.GetGameServerDeploymentCallback): void;

                    /**
                     * Calls GetGameServerDeployment.
                     * @param request GetGameServerDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public getGameServerDeployment(request: google.cloud.gaming.v1beta.IGetGameServerDeploymentRequest): Promise<google.cloud.gaming.v1beta.GameServerDeployment>;

                    /**
                     * Calls CreateGameServerDeployment.
                     * @param request CreateGameServerDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createGameServerDeployment(request: google.cloud.gaming.v1beta.ICreateGameServerDeploymentRequest, callback: google.cloud.gaming.v1beta.GameServerDeploymentsService.CreateGameServerDeploymentCallback): void;

                    /**
                     * Calls CreateGameServerDeployment.
                     * @param request CreateGameServerDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public createGameServerDeployment(request: google.cloud.gaming.v1beta.ICreateGameServerDeploymentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteGameServerDeployment.
                     * @param request DeleteGameServerDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteGameServerDeployment(request: google.cloud.gaming.v1beta.IDeleteGameServerDeploymentRequest, callback: google.cloud.gaming.v1beta.GameServerDeploymentsService.DeleteGameServerDeploymentCallback): void;

                    /**
                     * Calls DeleteGameServerDeployment.
                     * @param request DeleteGameServerDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public deleteGameServerDeployment(request: google.cloud.gaming.v1beta.IDeleteGameServerDeploymentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateGameServerDeployment.
                     * @param request UpdateGameServerDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateGameServerDeployment(request: google.cloud.gaming.v1beta.IUpdateGameServerDeploymentRequest, callback: google.cloud.gaming.v1beta.GameServerDeploymentsService.UpdateGameServerDeploymentCallback): void;

                    /**
                     * Calls UpdateGameServerDeployment.
                     * @param request UpdateGameServerDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public updateGameServerDeployment(request: google.cloud.gaming.v1beta.IUpdateGameServerDeploymentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetGameServerDeploymentRollout.
                     * @param request GetGameServerDeploymentRolloutRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GameServerDeploymentRollout
                     */
                    public getGameServerDeploymentRollout(request: google.cloud.gaming.v1beta.IGetGameServerDeploymentRolloutRequest, callback: google.cloud.gaming.v1beta.GameServerDeploymentsService.GetGameServerDeploymentRolloutCallback): void;

                    /**
                     * Calls GetGameServerDeploymentRollout.
                     * @param request GetGameServerDeploymentRolloutRequest message or plain object
                     * @returns Promise
                     */
                    public getGameServerDeploymentRollout(request: google.cloud.gaming.v1beta.IGetGameServerDeploymentRolloutRequest): Promise<google.cloud.gaming.v1beta.GameServerDeploymentRollout>;

                    /**
                     * Calls UpdateGameServerDeploymentRollout.
                     * @param request UpdateGameServerDeploymentRolloutRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateGameServerDeploymentRollout(request: google.cloud.gaming.v1beta.IUpdateGameServerDeploymentRolloutRequest, callback: google.cloud.gaming.v1beta.GameServerDeploymentsService.UpdateGameServerDeploymentRolloutCallback): void;

                    /**
                     * Calls UpdateGameServerDeploymentRollout.
                     * @param request UpdateGameServerDeploymentRolloutRequest message or plain object
                     * @returns Promise
                     */
                    public updateGameServerDeploymentRollout(request: google.cloud.gaming.v1beta.IUpdateGameServerDeploymentRolloutRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls PreviewGameServerDeploymentRollout.
                     * @param request PreviewGameServerDeploymentRolloutRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PreviewGameServerDeploymentRolloutResponse
                     */
                    public previewGameServerDeploymentRollout(request: google.cloud.gaming.v1beta.IPreviewGameServerDeploymentRolloutRequest, callback: google.cloud.gaming.v1beta.GameServerDeploymentsService.PreviewGameServerDeploymentRolloutCallback): void;

                    /**
                     * Calls PreviewGameServerDeploymentRollout.
                     * @param request PreviewGameServerDeploymentRolloutRequest message or plain object
                     * @returns Promise
                     */
                    public previewGameServerDeploymentRollout(request: google.cloud.gaming.v1beta.IPreviewGameServerDeploymentRolloutRequest): Promise<google.cloud.gaming.v1beta.PreviewGameServerDeploymentRolloutResponse>;

                    /**
                     * Calls FetchDeploymentState.
                     * @param request FetchDeploymentStateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and FetchDeploymentStateResponse
                     */
                    public fetchDeploymentState(request: google.cloud.gaming.v1beta.IFetchDeploymentStateRequest, callback: google.cloud.gaming.v1beta.GameServerDeploymentsService.FetchDeploymentStateCallback): void;

                    /**
                     * Calls FetchDeploymentState.
                     * @param request FetchDeploymentStateRequest message or plain object
                     * @returns Promise
                     */
                    public fetchDeploymentState(request: google.cloud.gaming.v1beta.IFetchDeploymentStateRequest): Promise<google.cloud.gaming.v1beta.FetchDeploymentStateResponse>;
                }

                namespace GameServerDeploymentsService {

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.GameServerDeploymentsService#listGameServerDeployments}.
                     * @param error Error, if any
                     * @param [response] ListGameServerDeploymentsResponse
                     */
                    type ListGameServerDeploymentsCallback = (error: (Error|null), response?: google.cloud.gaming.v1beta.ListGameServerDeploymentsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.GameServerDeploymentsService#getGameServerDeployment}.
                     * @param error Error, if any
                     * @param [response] GameServerDeployment
                     */
                    type GetGameServerDeploymentCallback = (error: (Error|null), response?: google.cloud.gaming.v1beta.GameServerDeployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.GameServerDeploymentsService#createGameServerDeployment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateGameServerDeploymentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.GameServerDeploymentsService#deleteGameServerDeployment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteGameServerDeploymentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.GameServerDeploymentsService#updateGameServerDeployment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateGameServerDeploymentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.GameServerDeploymentsService#getGameServerDeploymentRollout}.
                     * @param error Error, if any
                     * @param [response] GameServerDeploymentRollout
                     */
                    type GetGameServerDeploymentRolloutCallback = (error: (Error|null), response?: google.cloud.gaming.v1beta.GameServerDeploymentRollout) => void;

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.GameServerDeploymentsService#updateGameServerDeploymentRollout}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateGameServerDeploymentRolloutCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.GameServerDeploymentsService#previewGameServerDeploymentRollout}.
                     * @param error Error, if any
                     * @param [response] PreviewGameServerDeploymentRolloutResponse
                     */
                    type PreviewGameServerDeploymentRolloutCallback = (error: (Error|null), response?: google.cloud.gaming.v1beta.PreviewGameServerDeploymentRolloutResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.GameServerDeploymentsService#fetchDeploymentState}.
                     * @param error Error, if any
                     * @param [response] FetchDeploymentStateResponse
                     */
                    type FetchDeploymentStateCallback = (error: (Error|null), response?: google.cloud.gaming.v1beta.FetchDeploymentStateResponse) => void;
                }

                /** Properties of a ListRealmsRequest. */
                interface IListRealmsRequest {

                    /** ListRealmsRequest parent */
                    parent?: (string|null);

                    /** ListRealmsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRealmsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListRealmsRequest filter */
                    filter?: (string|null);

                    /** ListRealmsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListRealmsRequest. */
                class ListRealmsRequest implements IListRealmsRequest {

                    /**
                     * Constructs a new ListRealmsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IListRealmsRequest);

                    /** ListRealmsRequest parent. */
                    public parent: string;

                    /** ListRealmsRequest pageSize. */
                    public pageSize: number;

                    /** ListRealmsRequest pageToken. */
                    public pageToken: string;

                    /** ListRealmsRequest filter. */
                    public filter: string;

                    /** ListRealmsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListRealmsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRealmsRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IListRealmsRequest): google.cloud.gaming.v1beta.ListRealmsRequest;

                    /**
                     * Encodes the specified ListRealmsRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.ListRealmsRequest.verify|verify} messages.
                     * @param message ListRealmsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IListRealmsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRealmsRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.ListRealmsRequest.verify|verify} messages.
                     * @param message ListRealmsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IListRealmsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRealmsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRealmsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.ListRealmsRequest;

                    /**
                     * Decodes a ListRealmsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRealmsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.ListRealmsRequest;

                    /**
                     * Verifies a ListRealmsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRealmsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRealmsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.ListRealmsRequest;

                    /**
                     * Creates a plain object from a ListRealmsRequest message. Also converts values to other types if specified.
                     * @param message ListRealmsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.ListRealmsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRealmsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListRealmsResponse. */
                interface IListRealmsResponse {

                    /** ListRealmsResponse realms */
                    realms?: (google.cloud.gaming.v1beta.IRealm[]|null);

                    /** ListRealmsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListRealmsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListRealmsResponse. */
                class ListRealmsResponse implements IListRealmsResponse {

                    /**
                     * Constructs a new ListRealmsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IListRealmsResponse);

                    /** ListRealmsResponse realms. */
                    public realms: google.cloud.gaming.v1beta.IRealm[];

                    /** ListRealmsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListRealmsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListRealmsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRealmsResponse instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IListRealmsResponse): google.cloud.gaming.v1beta.ListRealmsResponse;

                    /**
                     * Encodes the specified ListRealmsResponse message. Does not implicitly {@link google.cloud.gaming.v1beta.ListRealmsResponse.verify|verify} messages.
                     * @param message ListRealmsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IListRealmsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRealmsResponse message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.ListRealmsResponse.verify|verify} messages.
                     * @param message ListRealmsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IListRealmsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRealmsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRealmsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.ListRealmsResponse;

                    /**
                     * Decodes a ListRealmsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRealmsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.ListRealmsResponse;

                    /**
                     * Verifies a ListRealmsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRealmsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRealmsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.ListRealmsResponse;

                    /**
                     * Creates a plain object from a ListRealmsResponse message. Also converts values to other types if specified.
                     * @param message ListRealmsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.ListRealmsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRealmsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetRealmRequest. */
                interface IGetRealmRequest {

                    /** GetRealmRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRealmRequest. */
                class GetRealmRequest implements IGetRealmRequest {

                    /**
                     * Constructs a new GetRealmRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IGetRealmRequest);

                    /** GetRealmRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRealmRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRealmRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IGetRealmRequest): google.cloud.gaming.v1beta.GetRealmRequest;

                    /**
                     * Encodes the specified GetRealmRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.GetRealmRequest.verify|verify} messages.
                     * @param message GetRealmRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IGetRealmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRealmRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.GetRealmRequest.verify|verify} messages.
                     * @param message GetRealmRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IGetRealmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRealmRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRealmRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.GetRealmRequest;

                    /**
                     * Decodes a GetRealmRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRealmRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.GetRealmRequest;

                    /**
                     * Verifies a GetRealmRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRealmRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRealmRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.GetRealmRequest;

                    /**
                     * Creates a plain object from a GetRealmRequest message. Also converts values to other types if specified.
                     * @param message GetRealmRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.GetRealmRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRealmRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateRealmRequest. */
                interface ICreateRealmRequest {

                    /** CreateRealmRequest parent */
                    parent?: (string|null);

                    /** CreateRealmRequest realmId */
                    realmId?: (string|null);

                    /** CreateRealmRequest realm */
                    realm?: (google.cloud.gaming.v1beta.IRealm|null);
                }

                /** Represents a CreateRealmRequest. */
                class CreateRealmRequest implements ICreateRealmRequest {

                    /**
                     * Constructs a new CreateRealmRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.ICreateRealmRequest);

                    /** CreateRealmRequest parent. */
                    public parent: string;

                    /** CreateRealmRequest realmId. */
                    public realmId: string;

                    /** CreateRealmRequest realm. */
                    public realm?: (google.cloud.gaming.v1beta.IRealm|null);

                    /**
                     * Creates a new CreateRealmRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateRealmRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.ICreateRealmRequest): google.cloud.gaming.v1beta.CreateRealmRequest;

                    /**
                     * Encodes the specified CreateRealmRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.CreateRealmRequest.verify|verify} messages.
                     * @param message CreateRealmRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.ICreateRealmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateRealmRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.CreateRealmRequest.verify|verify} messages.
                     * @param message CreateRealmRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.ICreateRealmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateRealmRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateRealmRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.CreateRealmRequest;

                    /**
                     * Decodes a CreateRealmRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateRealmRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.CreateRealmRequest;

                    /**
                     * Verifies a CreateRealmRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateRealmRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateRealmRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.CreateRealmRequest;

                    /**
                     * Creates a plain object from a CreateRealmRequest message. Also converts values to other types if specified.
                     * @param message CreateRealmRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.CreateRealmRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateRealmRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteRealmRequest. */
                interface IDeleteRealmRequest {

                    /** DeleteRealmRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteRealmRequest. */
                class DeleteRealmRequest implements IDeleteRealmRequest {

                    /**
                     * Constructs a new DeleteRealmRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IDeleteRealmRequest);

                    /** DeleteRealmRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteRealmRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteRealmRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IDeleteRealmRequest): google.cloud.gaming.v1beta.DeleteRealmRequest;

                    /**
                     * Encodes the specified DeleteRealmRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.DeleteRealmRequest.verify|verify} messages.
                     * @param message DeleteRealmRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IDeleteRealmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteRealmRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.DeleteRealmRequest.verify|verify} messages.
                     * @param message DeleteRealmRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IDeleteRealmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteRealmRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteRealmRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.DeleteRealmRequest;

                    /**
                     * Decodes a DeleteRealmRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteRealmRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.DeleteRealmRequest;

                    /**
                     * Verifies a DeleteRealmRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteRealmRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteRealmRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.DeleteRealmRequest;

                    /**
                     * Creates a plain object from a DeleteRealmRequest message. Also converts values to other types if specified.
                     * @param message DeleteRealmRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.DeleteRealmRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteRealmRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateRealmRequest. */
                interface IUpdateRealmRequest {

                    /** UpdateRealmRequest realm */
                    realm?: (google.cloud.gaming.v1beta.IRealm|null);

                    /** UpdateRealmRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateRealmRequest. */
                class UpdateRealmRequest implements IUpdateRealmRequest {

                    /**
                     * Constructs a new UpdateRealmRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IUpdateRealmRequest);

                    /** UpdateRealmRequest realm. */
                    public realm?: (google.cloud.gaming.v1beta.IRealm|null);

                    /** UpdateRealmRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateRealmRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateRealmRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IUpdateRealmRequest): google.cloud.gaming.v1beta.UpdateRealmRequest;

                    /**
                     * Encodes the specified UpdateRealmRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.UpdateRealmRequest.verify|verify} messages.
                     * @param message UpdateRealmRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IUpdateRealmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateRealmRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.UpdateRealmRequest.verify|verify} messages.
                     * @param message UpdateRealmRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IUpdateRealmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateRealmRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateRealmRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.UpdateRealmRequest;

                    /**
                     * Decodes an UpdateRealmRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateRealmRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.UpdateRealmRequest;

                    /**
                     * Verifies an UpdateRealmRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateRealmRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateRealmRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.UpdateRealmRequest;

                    /**
                     * Creates a plain object from an UpdateRealmRequest message. Also converts values to other types if specified.
                     * @param message UpdateRealmRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.UpdateRealmRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateRealmRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PreviewRealmUpdateRequest. */
                interface IPreviewRealmUpdateRequest {

                    /** PreviewRealmUpdateRequest realm */
                    realm?: (google.cloud.gaming.v1beta.IRealm|null);

                    /** PreviewRealmUpdateRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** PreviewRealmUpdateRequest previewTime */
                    previewTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a PreviewRealmUpdateRequest. */
                class PreviewRealmUpdateRequest implements IPreviewRealmUpdateRequest {

                    /**
                     * Constructs a new PreviewRealmUpdateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IPreviewRealmUpdateRequest);

                    /** PreviewRealmUpdateRequest realm. */
                    public realm?: (google.cloud.gaming.v1beta.IRealm|null);

                    /** PreviewRealmUpdateRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** PreviewRealmUpdateRequest previewTime. */
                    public previewTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new PreviewRealmUpdateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PreviewRealmUpdateRequest instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IPreviewRealmUpdateRequest): google.cloud.gaming.v1beta.PreviewRealmUpdateRequest;

                    /**
                     * Encodes the specified PreviewRealmUpdateRequest message. Does not implicitly {@link google.cloud.gaming.v1beta.PreviewRealmUpdateRequest.verify|verify} messages.
                     * @param message PreviewRealmUpdateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IPreviewRealmUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PreviewRealmUpdateRequest message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.PreviewRealmUpdateRequest.verify|verify} messages.
                     * @param message PreviewRealmUpdateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IPreviewRealmUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PreviewRealmUpdateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PreviewRealmUpdateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.PreviewRealmUpdateRequest;

                    /**
                     * Decodes a PreviewRealmUpdateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PreviewRealmUpdateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.PreviewRealmUpdateRequest;

                    /**
                     * Verifies a PreviewRealmUpdateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PreviewRealmUpdateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PreviewRealmUpdateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.PreviewRealmUpdateRequest;

                    /**
                     * Creates a plain object from a PreviewRealmUpdateRequest message. Also converts values to other types if specified.
                     * @param message PreviewRealmUpdateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.PreviewRealmUpdateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PreviewRealmUpdateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PreviewRealmUpdateResponse. */
                interface IPreviewRealmUpdateResponse {

                    /** PreviewRealmUpdateResponse etag */
                    etag?: (string|null);

                    /** PreviewRealmUpdateResponse targetState */
                    targetState?: (google.cloud.gaming.v1beta.ITargetState|null);
                }

                /** Represents a PreviewRealmUpdateResponse. */
                class PreviewRealmUpdateResponse implements IPreviewRealmUpdateResponse {

                    /**
                     * Constructs a new PreviewRealmUpdateResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IPreviewRealmUpdateResponse);

                    /** PreviewRealmUpdateResponse etag. */
                    public etag: string;

                    /** PreviewRealmUpdateResponse targetState. */
                    public targetState?: (google.cloud.gaming.v1beta.ITargetState|null);

                    /**
                     * Creates a new PreviewRealmUpdateResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PreviewRealmUpdateResponse instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IPreviewRealmUpdateResponse): google.cloud.gaming.v1beta.PreviewRealmUpdateResponse;

                    /**
                     * Encodes the specified PreviewRealmUpdateResponse message. Does not implicitly {@link google.cloud.gaming.v1beta.PreviewRealmUpdateResponse.verify|verify} messages.
                     * @param message PreviewRealmUpdateResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IPreviewRealmUpdateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PreviewRealmUpdateResponse message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.PreviewRealmUpdateResponse.verify|verify} messages.
                     * @param message PreviewRealmUpdateResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IPreviewRealmUpdateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PreviewRealmUpdateResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PreviewRealmUpdateResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.PreviewRealmUpdateResponse;

                    /**
                     * Decodes a PreviewRealmUpdateResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PreviewRealmUpdateResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.PreviewRealmUpdateResponse;

                    /**
                     * Verifies a PreviewRealmUpdateResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PreviewRealmUpdateResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PreviewRealmUpdateResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.PreviewRealmUpdateResponse;

                    /**
                     * Creates a plain object from a PreviewRealmUpdateResponse message. Also converts values to other types if specified.
                     * @param message PreviewRealmUpdateResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.PreviewRealmUpdateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PreviewRealmUpdateResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Realm. */
                interface IRealm {

                    /** Realm name */
                    name?: (string|null);

                    /** Realm createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Realm updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Realm labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Realm timeZone */
                    timeZone?: (string|null);

                    /** Realm etag */
                    etag?: (string|null);

                    /** Realm description */
                    description?: (string|null);
                }

                /** Represents a Realm. */
                class Realm implements IRealm {

                    /**
                     * Constructs a new Realm.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gaming.v1beta.IRealm);

                    /** Realm name. */
                    public name: string;

                    /** Realm createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Realm updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Realm labels. */
                    public labels: { [k: string]: string };

                    /** Realm timeZone. */
                    public timeZone: string;

                    /** Realm etag. */
                    public etag: string;

                    /** Realm description. */
                    public description: string;

                    /**
                     * Creates a new Realm instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Realm instance
                     */
                    public static create(properties?: google.cloud.gaming.v1beta.IRealm): google.cloud.gaming.v1beta.Realm;

                    /**
                     * Encodes the specified Realm message. Does not implicitly {@link google.cloud.gaming.v1beta.Realm.verify|verify} messages.
                     * @param message Realm message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gaming.v1beta.IRealm, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Realm message, length delimited. Does not implicitly {@link google.cloud.gaming.v1beta.Realm.verify|verify} messages.
                     * @param message Realm message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gaming.v1beta.IRealm, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Realm message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Realm
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gaming.v1beta.Realm;

                    /**
                     * Decodes a Realm message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Realm
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gaming.v1beta.Realm;

                    /**
                     * Verifies a Realm message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Realm message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Realm
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gaming.v1beta.Realm;

                    /**
                     * Creates a plain object from a Realm message. Also converts values to other types if specified.
                     * @param message Realm
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gaming.v1beta.Realm, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Realm to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Represents a RealmsService */
                class RealmsService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new RealmsService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new RealmsService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): RealmsService;

                    /**
                     * Calls ListRealms.
                     * @param request ListRealmsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRealmsResponse
                     */
                    public listRealms(request: google.cloud.gaming.v1beta.IListRealmsRequest, callback: google.cloud.gaming.v1beta.RealmsService.ListRealmsCallback): void;

                    /**
                     * Calls ListRealms.
                     * @param request ListRealmsRequest message or plain object
                     * @returns Promise
                     */
                    public listRealms(request: google.cloud.gaming.v1beta.IListRealmsRequest): Promise<google.cloud.gaming.v1beta.ListRealmsResponse>;

                    /**
                     * Calls GetRealm.
                     * @param request GetRealmRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Realm
                     */
                    public getRealm(request: google.cloud.gaming.v1beta.IGetRealmRequest, callback: google.cloud.gaming.v1beta.RealmsService.GetRealmCallback): void;

                    /**
                     * Calls GetRealm.
                     * @param request GetRealmRequest message or plain object
                     * @returns Promise
                     */
                    public getRealm(request: google.cloud.gaming.v1beta.IGetRealmRequest): Promise<google.cloud.gaming.v1beta.Realm>;

                    /**
                     * Calls CreateRealm.
                     * @param request CreateRealmRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createRealm(request: google.cloud.gaming.v1beta.ICreateRealmRequest, callback: google.cloud.gaming.v1beta.RealmsService.CreateRealmCallback): void;

                    /**
                     * Calls CreateRealm.
                     * @param request CreateRealmRequest message or plain object
                     * @returns Promise
                     */
                    public createRealm(request: google.cloud.gaming.v1beta.ICreateRealmRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteRealm.
                     * @param request DeleteRealmRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteRealm(request: google.cloud.gaming.v1beta.IDeleteRealmRequest, callback: google.cloud.gaming.v1beta.RealmsService.DeleteRealmCallback): void;

                    /**
                     * Calls DeleteRealm.
                     * @param request DeleteRealmRequest message or plain object
                     * @returns Promise
                     */
                    public deleteRealm(request: google.cloud.gaming.v1beta.IDeleteRealmRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateRealm.
                     * @param request UpdateRealmRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateRealm(request: google.cloud.gaming.v1beta.IUpdateRealmRequest, callback: google.cloud.gaming.v1beta.RealmsService.UpdateRealmCallback): void;

                    /**
                     * Calls UpdateRealm.
                     * @param request UpdateRealmRequest message or plain object
                     * @returns Promise
                     */
                    public updateRealm(request: google.cloud.gaming.v1beta.IUpdateRealmRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls PreviewRealmUpdate.
                     * @param request PreviewRealmUpdateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PreviewRealmUpdateResponse
                     */
                    public previewRealmUpdate(request: google.cloud.gaming.v1beta.IPreviewRealmUpdateRequest, callback: google.cloud.gaming.v1beta.RealmsService.PreviewRealmUpdateCallback): void;

                    /**
                     * Calls PreviewRealmUpdate.
                     * @param request PreviewRealmUpdateRequest message or plain object
                     * @returns Promise
                     */
                    public previewRealmUpdate(request: google.cloud.gaming.v1beta.IPreviewRealmUpdateRequest): Promise<google.cloud.gaming.v1beta.PreviewRealmUpdateResponse>;
                }

                namespace RealmsService {

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.RealmsService#listRealms}.
                     * @param error Error, if any
                     * @param [response] ListRealmsResponse
                     */
                    type ListRealmsCallback = (error: (Error|null), response?: google.cloud.gaming.v1beta.ListRealmsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.RealmsService#getRealm}.
                     * @param error Error, if any
                     * @param [response] Realm
                     */
                    type GetRealmCallback = (error: (Error|null), response?: google.cloud.gaming.v1beta.Realm) => void;

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.RealmsService#createRealm}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateRealmCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.RealmsService#deleteRealm}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteRealmCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.RealmsService#updateRealm}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateRealmCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gaming.v1beta.RealmsService#previewRealmUpdate}.
                     * @param error Error, if any
                     * @param [response] PreviewRealmUpdateResponse
                     */
                    type PreviewRealmUpdateCallback = (error: (Error|null), response?: google.cloud.gaming.v1beta.PreviewRealmUpdateResponse) => void;
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5
        }

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get: string;

            /** HttpRule put. */
            public put: string;

            /** HttpRule post. */
            public post: string;

            /** HttpRule delete. */
            public delete: string;

            /** HttpRule patch. */
            public patch: string;

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History);

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);

            /** MethodOptions .google.longrunning.operationInfo */
            ".google.longrunning.operationInfo"?: (google.longrunning.IOperationInfo|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|string|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long|string);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            public static create(properties?: google.protobuf.IFieldMask): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|string|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: (Uint8Array|string);

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace longrunning. */
    namespace longrunning {

        /** Represents an Operations */
        class Operations extends $protobuf.rpc.Service {

            /**
             * Constructs a new Operations service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Operations service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Operations;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListOperationsResponse
             */
            public listOperations(request: google.longrunning.IListOperationsRequest, callback: google.longrunning.Operations.ListOperationsCallback): void;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @returns Promise
             */
            public listOperations(request: google.longrunning.IListOperationsRequest): Promise<google.longrunning.ListOperationsResponse>;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public getOperation(request: google.longrunning.IGetOperationRequest, callback: google.longrunning.Operations.GetOperationCallback): void;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @returns Promise
             */
            public getOperation(request: google.longrunning.IGetOperationRequest): Promise<google.longrunning.Operation>;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest, callback: google.longrunning.Operations.DeleteOperationCallback): void;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @returns Promise
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest, callback: google.longrunning.Operations.CancelOperationCallback): void;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @returns Promise
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest, callback: google.longrunning.Operations.WaitOperationCallback): void;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @returns Promise
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest): Promise<google.longrunning.Operation>;
        }

        namespace Operations {

            /**
             * Callback as used by {@link google.longrunning.Operations#listOperations}.
             * @param error Error, if any
             * @param [response] ListOperationsResponse
             */
            type ListOperationsCallback = (error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#getOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type GetOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#deleteOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#cancelOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CancelOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#waitOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type WaitOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
        }

        /** Properties of an Operation. */
        interface IOperation {

            /** Operation name */
            name?: (string|null);

            /** Operation metadata */
            metadata?: (google.protobuf.IAny|null);

            /** Operation done */
            done?: (boolean|null);

            /** Operation error */
            error?: (google.rpc.IStatus|null);

            /** Operation response */
            response?: (google.protobuf.IAny|null);
        }

        /** Represents an Operation. */
        class Operation implements IOperation {

            /**
             * Constructs a new Operation.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperation);

            /** Operation name. */
            public name: string;

            /** Operation metadata. */
            public metadata?: (google.protobuf.IAny|null);

            /** Operation done. */
            public done: boolean;

            /** Operation error. */
            public error?: (google.rpc.IStatus|null);

            /** Operation response. */
            public response?: (google.protobuf.IAny|null);

            /** Operation result. */
            public result?: ("error"|"response");

            /**
             * Creates a new Operation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operation instance
             */
            public static create(properties?: google.longrunning.IOperation): google.longrunning.Operation;

            /**
             * Encodes the specified Operation message. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Operation message, length delimited. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Operation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.Operation;

            /**
             * Decodes an Operation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.Operation;

            /**
             * Verifies an Operation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Operation
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.Operation;

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @param message Operation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Operation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetOperationRequest. */
        interface IGetOperationRequest {

            /** GetOperationRequest name */
            name?: (string|null);
        }

        /** Represents a GetOperationRequest. */
        class GetOperationRequest implements IGetOperationRequest {

            /**
             * Constructs a new GetOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IGetOperationRequest);

            /** GetOperationRequest name. */
            public name: string;

            /**
             * Creates a new GetOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOperationRequest instance
             */
            public static create(properties?: google.longrunning.IGetOperationRequest): google.longrunning.GetOperationRequest;

            /**
             * Encodes the specified GetOperationRequest message. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.GetOperationRequest;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.GetOperationRequest;

            /**
             * Verifies a GetOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.GetOperationRequest;

            /**
             * Creates a plain object from a GetOperationRequest message. Also converts values to other types if specified.
             * @param message GetOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.GetOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsRequest. */
        interface IListOperationsRequest {

            /** ListOperationsRequest name */
            name?: (string|null);

            /** ListOperationsRequest filter */
            filter?: (string|null);

            /** ListOperationsRequest pageSize */
            pageSize?: (number|null);

            /** ListOperationsRequest pageToken */
            pageToken?: (string|null);
        }

        /** Represents a ListOperationsRequest. */
        class ListOperationsRequest implements IListOperationsRequest {

            /**
             * Constructs a new ListOperationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsRequest);

            /** ListOperationsRequest name. */
            public name: string;

            /** ListOperationsRequest filter. */
            public filter: string;

            /** ListOperationsRequest pageSize. */
            public pageSize: number;

            /** ListOperationsRequest pageToken. */
            public pageToken: string;

            /**
             * Creates a new ListOperationsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsRequest instance
             */
            public static create(properties?: google.longrunning.IListOperationsRequest): google.longrunning.ListOperationsRequest;

            /**
             * Encodes the specified ListOperationsRequest message. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsRequest message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsRequest;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsRequest;

            /**
             * Verifies a ListOperationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsRequest;

            /**
             * Creates a plain object from a ListOperationsRequest message. Also converts values to other types if specified.
             * @param message ListOperationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsResponse. */
        interface IListOperationsResponse {

            /** ListOperationsResponse operations */
            operations?: (google.longrunning.IOperation[]|null);

            /** ListOperationsResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListOperationsResponse. */
        class ListOperationsResponse implements IListOperationsResponse {

            /**
             * Constructs a new ListOperationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsResponse);

            /** ListOperationsResponse operations. */
            public operations: google.longrunning.IOperation[];

            /** ListOperationsResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListOperationsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsResponse instance
             */
            public static create(properties?: google.longrunning.IListOperationsResponse): google.longrunning.ListOperationsResponse;

            /**
             * Encodes the specified ListOperationsResponse message. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsResponse message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsResponse;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsResponse;

            /**
             * Verifies a ListOperationsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsResponse
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsResponse;

            /**
             * Creates a plain object from a ListOperationsResponse message. Also converts values to other types if specified.
             * @param message ListOperationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CancelOperationRequest. */
        interface ICancelOperationRequest {

            /** CancelOperationRequest name */
            name?: (string|null);
        }

        /** Represents a CancelOperationRequest. */
        class CancelOperationRequest implements ICancelOperationRequest {

            /**
             * Constructs a new CancelOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.ICancelOperationRequest);

            /** CancelOperationRequest name. */
            public name: string;

            /**
             * Creates a new CancelOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CancelOperationRequest instance
             */
            public static create(properties?: google.longrunning.ICancelOperationRequest): google.longrunning.CancelOperationRequest;

            /**
             * Encodes the specified CancelOperationRequest message. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CancelOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.CancelOperationRequest;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.CancelOperationRequest;

            /**
             * Verifies a CancelOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CancelOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CancelOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.CancelOperationRequest;

            /**
             * Creates a plain object from a CancelOperationRequest message. Also converts values to other types if specified.
             * @param message CancelOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.CancelOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CancelOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeleteOperationRequest. */
        interface IDeleteOperationRequest {

            /** DeleteOperationRequest name */
            name?: (string|null);
        }

        /** Represents a DeleteOperationRequest. */
        class DeleteOperationRequest implements IDeleteOperationRequest {

            /**
             * Constructs a new DeleteOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IDeleteOperationRequest);

            /** DeleteOperationRequest name. */
            public name: string;

            /**
             * Creates a new DeleteOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteOperationRequest instance
             */
            public static create(properties?: google.longrunning.IDeleteOperationRequest): google.longrunning.DeleteOperationRequest;

            /**
             * Encodes the specified DeleteOperationRequest message. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.DeleteOperationRequest;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.DeleteOperationRequest;

            /**
             * Verifies a DeleteOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.DeleteOperationRequest;

            /**
             * Creates a plain object from a DeleteOperationRequest message. Also converts values to other types if specified.
             * @param message DeleteOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.DeleteOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WaitOperationRequest. */
        interface IWaitOperationRequest {

            /** WaitOperationRequest name */
            name?: (string|null);

            /** WaitOperationRequest timeout */
            timeout?: (google.protobuf.IDuration|null);
        }

        /** Represents a WaitOperationRequest. */
        class WaitOperationRequest implements IWaitOperationRequest {

            /**
             * Constructs a new WaitOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IWaitOperationRequest);

            /** WaitOperationRequest name. */
            public name: string;

            /** WaitOperationRequest timeout. */
            public timeout?: (google.protobuf.IDuration|null);

            /**
             * Creates a new WaitOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WaitOperationRequest instance
             */
            public static create(properties?: google.longrunning.IWaitOperationRequest): google.longrunning.WaitOperationRequest;

            /**
             * Encodes the specified WaitOperationRequest message. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WaitOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.WaitOperationRequest;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.WaitOperationRequest;

            /**
             * Verifies a WaitOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WaitOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WaitOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.WaitOperationRequest;

            /**
             * Creates a plain object from a WaitOperationRequest message. Also converts values to other types if specified.
             * @param message WaitOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.WaitOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WaitOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OperationInfo. */
        interface IOperationInfo {

            /** OperationInfo responseType */
            responseType?: (string|null);

            /** OperationInfo metadataType */
            metadataType?: (string|null);
        }

        /** Represents an OperationInfo. */
        class OperationInfo implements IOperationInfo {

            /**
             * Constructs a new OperationInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperationInfo);

            /** OperationInfo responseType. */
            public responseType: string;

            /** OperationInfo metadataType. */
            public metadataType: string;

            /**
             * Creates a new OperationInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperationInfo instance
             */
            public static create(properties?: google.longrunning.IOperationInfo): google.longrunning.OperationInfo;

            /**
             * Encodes the specified OperationInfo message. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperationInfo message, length delimited. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.OperationInfo;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.OperationInfo;

            /**
             * Verifies an OperationInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperationInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperationInfo
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.OperationInfo;

            /**
             * Creates a plain object from an OperationInfo message. Also converts values to other types if specified.
             * @param message OperationInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.OperationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperationInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: google.rpc.IStatus): google.rpc.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
