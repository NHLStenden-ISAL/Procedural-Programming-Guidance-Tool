
type ImmutableProperty<T> = T extends object ? Immutable<T> : T;

export type Immutable<T> = {
    readonly [P in keyof T]: ImmutableProperty<T[P]>;
};
