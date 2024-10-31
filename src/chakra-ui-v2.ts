//import * as react from 'react';

import {
    ThemingProps,
    SystemStyleObject,
    StyleProps,
    SystemProps,
    ResponsiveValue,
    //Interpolation,
  } from '@chakra-ui/styled-system'

import { As, PropsOf, ComponentWithAs, Interpolation, ChakraStyledOptions } from '@chakra-ui/system'
//import { CSSObject } from '@emotion/react';

//import { Dict } from '@chakra-ui/utils'
// export declare function useMultiStyleConfig(themeKey: string, props?: ThemingProps & Dict): Record<string, SystemStyleObject>;
// export declare const useStyles: () => Dict<SystemStyleObject>;
//export declare const StylesProvider: react.Provider<Dict<SystemStyleObject>>;

export declare type EventKeys = "ArrowDown" | "ArrowUp" | "ArrowLeft" | "ArrowRight" | "Enter" | "Space" | "Tab" | "Backspace" | "Control" | "Meta" | "Home" | "End" | "PageDown" | "PageUp" | "Delete" | "Escape" | " " | "Shift";

// declare type As<Props = any> = React.ElementType<Props>;
// declare type OmitCommonProps<Target, OmitAdditionalProps extends keyof any = never> = Omit<Target, "transition" | "as" | "color" | OmitAdditionalProps>;
// declare type RightJoinProps<SourceProps extends object = {}, OverrideProps extends object = {}> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;
// declare type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
//   as?: As;
// };
// declare type MergeWithAs<ComponentProps extends object, AsProps extends object, AdditionalProps extends object = {}, AsComponent extends As = As> = RightJoinProps<ComponentProps, AdditionalProps> & RightJoinProps<AsProps, AdditionalProps> & {
//   as?: AsComponent;
// };
// declare type ComponentWithAs<Component extends As, Props extends object = {}> = {
//   <AsComponent extends As = Component>(props: MergeWithAs<React.ComponentProps<Component>, React.ComponentProps<AsComponent>, Props, AsComponent>): JSX.Element;
//   displayName?: string;
//   propTypes?: React.WeakValidationMap<any>;
//   contextTypes?: React.ValidationMap<any>;
//   defaultProps?: Partial<any>;
//   id?: string;
// };
// export declare function forwardRef<Props extends object, Component extends As>(component: React.ForwardRefRenderFunction<any, RightJoinProps<PropsOf<Component>, Props> & {
//   as?: As;
// }>): ComponentWithAs<Component, Props>;  

interface ChakraProps extends SystemProps {
  /**
   * Used to truncate text at a specific number of lines
   */
  noOfLines?: ResponsiveValue<number>;
  /**
   * Used for internal css management
   * @private
   */
  __css?: SystemStyleObject;
  /**
   * Used to pass theme-aware style props.
   * NB: This is the public API for user-land
   */
  sx?: SystemStyleObject;
  /**
   * The emotion's css style object
   */
  css?: Interpolation<{}>;
}

export declare type HTMLChakraProps<T extends As> = Omit<PropsOf<T>, "ref" | keyof StyleProps> & ChakraProps & {
  as?: As;
};

export interface TagProps extends HTMLChakraProps<"span">, ThemingProps<"Tag"> {
}


// declare type StyleResolverProps = SystemStyleObject & {
//   __css?: SystemStyleObject;
//   sx?: SystemStyleObject;
//   theme: any;
//   css?: CSSObject;
// };

// interface ChakraStyledOptions extends Dict {
//   shouldForwardProp?(prop: string): boolean;
//   label?: string;
//   baseStyle?: SystemStyleObject | ((props: StyleResolverProps) => SystemStyleObject);
// }

export interface ChakraComponent<T extends As, P = {}> extends ComponentWithAs<T, ChakraProps & P> {
}

export declare type ChakraFactory = {
  <T extends As, P = {}>(component: T, options?: ChakraStyledOptions): ChakraComponent<T, P>;
};

// declare type DOMElements = keyof JSX.IntrinsicElements;

// declare type HTMLChakraComponents = {
//   [Tag in DOMElements]: ChakraComponent<Tag, {}>;
// };

//export declare const chakra: ChakraFactory & HTMLChakraComponents;
