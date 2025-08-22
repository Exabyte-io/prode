import type { WorkflowPropertySchema } from "@mat3ra/esse/dist/js/types";
import Property from "../../Property";
export default class WorkflowProperty extends Property implements WorkflowPropertySchema {
    readonly name: WorkflowPropertySchema["name"];
    constructor(config: object);
    get subworkflows(): {
        units: ({
            type: "io";
            subtype: "input" | "output" | "dataFrame";
            source: "api" | "db" | "object_storage";
            input: ({
                endpoint: string;
                endpoint_options: {};
                name?: string;
                [k: string]: unknown;
            } | ({
                ids: string[];
                [k: string]: unknown;
            } | {
                collection: string;
                draft: boolean;
                [k: string]: unknown;
            }) | {
                objectData: {
                    CONTAINER?: string;
                    NAME?: string;
                    PROVIDER?: string;
                    REGION?: string;
                    SIZE?: number;
                    TIMESTAMP?: string;
                };
                overwrite?: boolean;
                pathname?: string;
                basename: string;
                filetype: string;
                [k: string]: unknown;
            })[];
            _id?: string;
            isDraft?: boolean;
            name?: string;
            status?: "idle" | "active" | "warning" | "error" | "finished";
            head?: boolean;
            flowchartId: string;
            next?: string;
            enableRender?: boolean;
            context?: {};
            slug?: string;
            systemName?: string;
            schemaVersion?: string;
            isDefault?: boolean;
            preProcessors?: ({
                name: string;
            } | string)[];
            postProcessors?: ({
                name: string;
            } | string)[];
            monitors?: ({
                name: string;
            } | string)[];
            results?: ({
                name: string;
            } | string)[];
            tags?: string[];
            statusTrack?: {
                trackedAt: number;
                status: string;
                repetition?: number;
            }[];
            [k: string]: unknown;
        } | {
            type: "reduce";
            mapFlowchartId: string;
            input: {
                operation: string;
                arguments: string[];
            }[];
            _id?: string;
            isDraft?: boolean;
            name?: string;
            status?: "idle" | "active" | "warning" | "error" | "finished";
            head?: boolean;
            flowchartId: string;
            next?: string;
            enableRender?: boolean;
            context?: {};
            slug?: string;
            systemName?: string;
            schemaVersion?: string;
            isDefault?: boolean;
            preProcessors?: ({
                name: string;
            } | string)[];
            postProcessors?: ({
                name: string;
            } | string)[];
            monitors?: ({
                name: string;
            } | string)[];
            results?: ({
                name: string;
            } | string)[];
            tags?: string[];
            statusTrack?: {
                trackedAt: number;
                status: string;
                repetition?: number;
            }[];
            [k: string]: unknown;
        } | {
            type: "condition";
            input: {
                scope: string;
                name: string;
            }[];
            statement: string;
            then: string;
            else: string;
            maxOccurrences: number;
            throwException?: boolean;
            _id?: string;
            isDraft?: boolean;
            name?: string;
            status?: "idle" | "active" | "warning" | "error" | "finished";
            head?: boolean;
            flowchartId: string;
            next?: string;
            enableRender?: boolean;
            context?: {};
            slug?: string;
            systemName?: string;
            schemaVersion?: string;
            isDefault?: boolean;
            preProcessors?: ({
                name: string;
            } | string)[];
            postProcessors?: ({
                name: string;
            } | string)[];
            monitors?: ({
                name: string;
            } | string)[];
            results?: ({
                name: string;
            } | string)[];
            tags?: string[];
            statusTrack?: {
                trackedAt: number;
                status: string;
                repetition?: number;
            }[];
            [k: string]: unknown;
        } | {
            type: "assertion";
            statement: string;
            errorMessage?: string;
            _id?: string;
            isDraft?: boolean;
            name: string;
            status?: "idle" | "active" | "warning" | "error" | "finished";
            head?: boolean;
            flowchartId: string;
            next?: string;
            enableRender?: boolean;
            context?: {};
            slug?: string;
            systemName?: string;
            schemaVersion?: string;
            isDefault?: boolean;
            preProcessors?: ({
                name: string;
            } | string)[];
            postProcessors?: ({
                name: string;
            } | string)[];
            monitors?: ({
                name: string;
            } | string)[];
            results?: ({
                name: string;
            } | string)[];
            tags?: string[];
            statusTrack?: {
                trackedAt: number;
                status: string;
                repetition?: number;
            }[];
            [k: string]: unknown;
        } | {
            type: "execution";
            application: {
                shortName?: string;
                summary?: string;
                version?: string;
                build?: string;
                hasAdvancedComputeOptions?: boolean;
                isLicensed?: boolean;
                _id?: string;
                slug?: string;
                systemName?: string;
                schemaVersion?: string;
                name?: string;
                isDefault?: boolean;
                [k: string]: unknown;
            };
            executable?: {
                name: string;
                applicationId?: string[];
                hasAdvancedComputeOptions?: boolean;
                _id?: string;
                slug?: string;
                systemName?: string;
                schemaVersion?: string;
                isDefault?: boolean;
                preProcessors?: ({
                    name: string;
                } | string)[];
                postProcessors?: ({
                    name: string;
                } | string)[];
                monitors?: ({
                    name: string;
                } | string)[];
                results?: ({
                    name: string;
                } | string)[];
            };
            flavor?: {
                executableId?: string;
                executableName?: string;
                applicationName?: string;
                input?: {
                    templateId?: string;
                    templateName?: string;
                    name?: string;
                }[];
                supportedApplicationVersions?: string[];
                _id?: string;
                slug?: string;
                systemName?: string;
                schemaVersion?: string;
                name?: string;
                isDefault?: boolean;
                preProcessors?: ({
                    name: string;
                } | string)[];
                postProcessors?: ({
                    name: string;
                } | string)[];
                monitors?: ({
                    name: string;
                } | string)[];
                results?: ({
                    name: string;
                } | string)[];
            };
            input: {
                [k: string]: unknown;
            };
            _id?: string;
            isDraft?: boolean;
            name?: string;
            status?: "idle" | "active" | "warning" | "error" | "finished";
            head?: boolean;
            flowchartId: string;
            next?: string;
            enableRender?: boolean;
            context?: {};
            slug?: string;
            systemName?: string;
            schemaVersion?: string;
            isDefault?: boolean;
            preProcessors?: ({
                name: string;
            } | string)[];
            postProcessors?: ({
                name: string;
            } | string)[];
            monitors?: ({
                name: string;
            } | string)[];
            results?: ({
                name: string;
            } | string)[];
            tags?: string[];
            statusTrack?: {
                trackedAt: number;
                status: string;
                repetition?: number;
            }[];
            [k: string]: unknown;
        } | {
            type: "assignment";
            input?: {
                scope: string;
                name: string;
            }[];
            operand: string;
            value: string | boolean | number;
            _id?: string;
            isDraft?: boolean;
            name: string;
            status?: "idle" | "active" | "warning" | "error" | "finished";
            head?: boolean;
            flowchartId: string;
            next?: string;
            enableRender?: boolean;
            context?: {};
            slug?: string;
            systemName?: string;
            schemaVersion?: string;
            isDefault?: boolean;
            preProcessors?: ({
                name: string;
            } | string)[];
            postProcessors?: ({
                name: string;
            } | string)[];
            monitors?: ({
                name: string;
            } | string)[];
            results?: ({
                name: string;
            } | string)[];
            tags?: string[];
            statusTrack?: {
                trackedAt: number;
                status: string;
                repetition?: number;
            }[];
            scope?: string;
            [k: string]: unknown;
        } | {
            type: "processing";
            operation: string;
            operationType: string;
            inputData: {
                [k: string]: unknown;
            };
            _id?: string;
            isDraft?: boolean;
            name?: string;
            status?: "idle" | "active" | "warning" | "error" | "finished";
            head?: boolean;
            flowchartId: string;
            next?: string;
            enableRender?: boolean;
            context?: {};
            slug?: string;
            systemName?: string;
            schemaVersion?: string;
            isDefault?: boolean;
            preProcessors?: ({
                name: string;
            } | string)[];
            postProcessors?: ({
                name: string;
            } | string)[];
            monitors?: ({
                name: string;
            } | string)[];
            results?: ({
                name: string;
            } | string)[];
            tags?: string[];
            statusTrack?: {
                trackedAt: number;
                status: string;
                repetition?: number;
            }[];
            [k: string]: unknown;
        })[];
        model: {
            type: string;
            subtype: string;
            method: {
                type: string;
                subtype: string;
                precision?: {};
                data?: {};
            };
            [k: string]: unknown;
        };
        application: {
            shortName?: string;
            summary?: string;
            version?: string;
            build?: string;
            hasAdvancedComputeOptions?: boolean;
            isLicensed?: boolean;
            _id?: string;
            slug?: string;
            systemName?: string;
            schemaVersion?: string;
            name?: string;
            isDefault?: boolean;
            [k: string]: unknown;
        };
        isDraft?: boolean;
        _id?: string;
        name: string;
        properties?: (string | {})[];
        compute?: {
            queue: "D" | "OR" | "OF" | "OFplus" | "SR" | "SF" | "SFplus" | "GPOF" | "GP2OF" | "GP4OF" | "GPSF" | "GP2SF" | "GP4SF" | "OR4" | "OR8" | "OR16" | "SR4" | "SR8" | "SR16" | "GOF" | "G4OF" | "G8OF" | "GSF" | "G4SF" | "G8SF";
            nodes: number;
            ppn: number;
            timeLimit: string;
            timeLimitType?: "per single attempt" | "compound";
            isRestartable?: boolean;
            notify?: string;
            email?: string;
            maxCPU?: number;
            arguments?: {
                nimage?: number;
                npools?: number;
                nband?: number;
                ntg?: number;
                ndiag?: number;
            };
            cluster?: {
                fqdn?: string;
                jid?: string;
            };
            errors?: {
                domain?: "rupy" | "alfred" | "celim" | "webapp";
                reason?: string;
                message?: string;
                traceback?: string;
            }[];
            excludeFilesPattern?: string;
        } | null;
    }[];
    get units(): ({
        [k: string]: unknown;
        type: "io";
        subtype: "input" | "output" | "dataFrame";
        source: "api" | "db" | "object_storage";
        input: ({
            endpoint: string;
            endpoint_options: {};
            name?: string;
            [k: string]: unknown;
        } | ({
            ids: string[];
            [k: string]: unknown;
        } | {
            collection: string;
            draft: boolean;
            [k: string]: unknown;
        }) | {
            objectData: {
                CONTAINER?: string;
                NAME?: string;
                PROVIDER?: string;
                REGION?: string;
                SIZE?: number;
                TIMESTAMP?: string;
            };
            overwrite?: boolean;
            pathname?: string;
            basename: string;
            filetype: string;
            [k: string]: unknown;
        })[];
        _id?: string;
        isDraft?: boolean;
        name?: string;
        status?: "idle" | "active" | "warning" | "error" | "finished";
        head?: boolean;
        flowchartId: string;
        next?: string;
        enableRender?: boolean;
        context?: {};
        slug?: string;
        systemName?: string;
        schemaVersion?: string;
        isDefault?: boolean;
        preProcessors?: ({
            name: string;
        } | string)[];
        postProcessors?: ({
            name: string;
        } | string)[];
        monitors?: ({
            name: string;
        } | string)[];
        results?: ({
            name: string;
        } | string)[];
        tags?: string[];
        statusTrack?: {
            trackedAt: number;
            status: string;
            repetition?: number;
        }[];
    } | {
        [k: string]: unknown;
        type: "reduce";
        mapFlowchartId: string;
        input: {
            operation: string;
            arguments: string[];
        }[];
        _id?: string;
        isDraft?: boolean;
        name?: string;
        status?: "idle" | "active" | "warning" | "error" | "finished";
        head?: boolean;
        flowchartId: string;
        next?: string;
        enableRender?: boolean;
        context?: {};
        slug?: string;
        systemName?: string;
        schemaVersion?: string;
        isDefault?: boolean;
        preProcessors?: ({
            name: string;
        } | string)[];
        postProcessors?: ({
            name: string;
        } | string)[];
        monitors?: ({
            name: string;
        } | string)[];
        results?: ({
            name: string;
        } | string)[];
        tags?: string[];
        statusTrack?: {
            trackedAt: number;
            status: string;
            repetition?: number;
        }[];
    } | {
        [k: string]: unknown;
        type: "condition";
        input: {
            scope: string;
            name: string;
        }[];
        statement: string;
        then: string;
        else: string;
        maxOccurrences: number;
        throwException?: boolean;
        _id?: string;
        isDraft?: boolean;
        name?: string;
        status?: "idle" | "active" | "warning" | "error" | "finished";
        head?: boolean;
        flowchartId: string;
        next?: string;
        enableRender?: boolean;
        context?: {};
        slug?: string;
        systemName?: string;
        schemaVersion?: string;
        isDefault?: boolean;
        preProcessors?: ({
            name: string;
        } | string)[];
        postProcessors?: ({
            name: string;
        } | string)[];
        monitors?: ({
            name: string;
        } | string)[];
        results?: ({
            name: string;
        } | string)[];
        tags?: string[];
        statusTrack?: {
            trackedAt: number;
            status: string;
            repetition?: number;
        }[];
    } | {
        [k: string]: unknown;
        type: "assertion";
        statement: string;
        errorMessage?: string;
        _id?: string;
        isDraft?: boolean;
        name: string;
        status?: "idle" | "active" | "warning" | "error" | "finished";
        head?: boolean;
        flowchartId: string;
        next?: string;
        enableRender?: boolean;
        context?: {};
        slug?: string;
        systemName?: string;
        schemaVersion?: string;
        isDefault?: boolean;
        preProcessors?: ({
            name: string;
        } | string)[];
        postProcessors?: ({
            name: string;
        } | string)[];
        monitors?: ({
            name: string;
        } | string)[];
        results?: ({
            name: string;
        } | string)[];
        tags?: string[];
        statusTrack?: {
            trackedAt: number;
            status: string;
            repetition?: number;
        }[];
    } | {
        [k: string]: unknown;
        type: "execution";
        application: {
            shortName?: string;
            summary?: string;
            version?: string;
            build?: string;
            hasAdvancedComputeOptions?: boolean;
            isLicensed?: boolean;
            _id?: string;
            slug?: string;
            systemName?: string;
            schemaVersion?: string;
            name?: string;
            isDefault?: boolean;
            [k: string]: unknown;
        };
        executable?: {
            name: string;
            applicationId?: string[];
            hasAdvancedComputeOptions?: boolean;
            _id?: string;
            slug?: string;
            systemName?: string;
            schemaVersion?: string;
            isDefault?: boolean;
            preProcessors?: ({
                name: string;
            } | string)[];
            postProcessors?: ({
                name: string;
            } | string)[];
            monitors?: ({
                name: string;
            } | string)[];
            results?: ({
                name: string;
            } | string)[];
        };
        flavor?: {
            executableId?: string;
            executableName?: string;
            applicationName?: string;
            input?: {
                templateId?: string;
                templateName?: string;
                name?: string;
            }[];
            supportedApplicationVersions?: string[];
            _id?: string;
            slug?: string;
            systemName?: string;
            schemaVersion?: string;
            name?: string;
            isDefault?: boolean;
            preProcessors?: ({
                name: string;
            } | string)[];
            postProcessors?: ({
                name: string;
            } | string)[];
            monitors?: ({
                name: string;
            } | string)[];
            results?: ({
                name: string;
            } | string)[];
        };
        input: {
            [k: string]: unknown;
        };
        _id?: string;
        isDraft?: boolean;
        name?: string;
        status?: "idle" | "active" | "warning" | "error" | "finished";
        head?: boolean;
        flowchartId: string;
        next?: string;
        enableRender?: boolean;
        context?: {};
        slug?: string;
        systemName?: string;
        schemaVersion?: string;
        isDefault?: boolean;
        preProcessors?: ({
            name: string;
        } | string)[];
        postProcessors?: ({
            name: string;
        } | string)[];
        monitors?: ({
            name: string;
        } | string)[];
        results?: ({
            name: string;
        } | string)[];
        tags?: string[];
        statusTrack?: {
            trackedAt: number;
            status: string;
            repetition?: number;
        }[];
    } | {
        [k: string]: unknown;
        type: "assignment";
        input?: {
            scope: string;
            name: string;
        }[];
        operand: string;
        value: string | boolean | number;
        _id?: string;
        isDraft?: boolean;
        name: string;
        status?: "idle" | "active" | "warning" | "error" | "finished";
        head?: boolean;
        flowchartId: string;
        next?: string;
        enableRender?: boolean;
        context?: {};
        slug?: string;
        systemName?: string;
        schemaVersion?: string;
        isDefault?: boolean;
        preProcessors?: ({
            name: string;
        } | string)[];
        postProcessors?: ({
            name: string;
        } | string)[];
        monitors?: ({
            name: string;
        } | string)[];
        results?: ({
            name: string;
        } | string)[];
        tags?: string[];
        statusTrack?: {
            trackedAt: number;
            status: string;
            repetition?: number;
        }[];
        scope?: string;
    } | {
        [k: string]: unknown;
        type: "processing";
        operation: string;
        operationType: string;
        inputData: {
            [k: string]: unknown;
        };
        _id?: string;
        isDraft?: boolean;
        name?: string;
        status?: "idle" | "active" | "warning" | "error" | "finished";
        head?: boolean;
        flowchartId: string;
        next?: string;
        enableRender?: boolean;
        context?: {};
        slug?: string;
        systemName?: string;
        schemaVersion?: string;
        isDefault?: boolean;
        preProcessors?: ({
            name: string;
        } | string)[];
        postProcessors?: ({
            name: string;
        } | string)[];
        monitors?: ({
            name: string;
        } | string)[];
        results?: ({
            name: string;
        } | string)[];
        tags?: string[];
        statusTrack?: {
            trackedAt: number;
            status: string;
            repetition?: number;
        }[];
    } | {
        [k: string]: unknown;
        type: "map";
        workflowId: string;
        input: {
            target: string;
            scope?: string;
            name?: string;
            values?: (string | number | {})[];
            useValues?: boolean;
        };
        _id?: string;
        isDraft?: boolean;
        name?: string;
        status?: "idle" | "active" | "warning" | "error" | "finished";
        head?: boolean;
        flowchartId: string;
        next?: string;
        enableRender?: boolean;
        context?: {};
        slug?: string;
        systemName?: string;
        schemaVersion?: string;
        isDefault?: boolean;
        preProcessors?: ({
            name: string;
        } | string)[];
        postProcessors?: ({
            name: string;
        } | string)[];
        monitors?: ({
            name: string;
        } | string)[];
        results?: ({
            name: string;
        } | string)[];
        tags?: string[];
        statusTrack?: {
            trackedAt: number;
            status: string;
            repetition?: number;
        }[];
    } | {
        [k: string]: unknown;
        type: "subworkflow";
        _id?: string;
        isDraft?: boolean;
        name?: string;
        status?: "idle" | "active" | "warning" | "error" | "finished";
        head?: boolean;
        flowchartId: string;
        next?: string;
        enableRender?: boolean;
        context?: {};
        slug?: string;
        systemName?: string;
        schemaVersion?: string;
        isDefault?: boolean;
        preProcessors?: ({
            name: string;
        } | string)[];
        postProcessors?: ({
            name: string;
        } | string)[];
        monitors?: ({
            name: string;
        } | string)[];
        results?: ({
            name: string;
        } | string)[];
        tags?: string[];
        statusTrack?: {
            trackedAt: number;
            status: string;
            repetition?: number;
        }[];
    })[];
    get properties(): (string | {})[] | undefined;
    get isUsingDataset(): boolean | undefined;
    get workflows(): {}[] | undefined;
    get isDefault(): boolean | undefined;
    get metadata(): {} | undefined;
}
