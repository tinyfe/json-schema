export type AST =
  | PrimitiveAST
  | TypeObject
  | TypeArray
  | TypeTupleArray
  | TypeInterface;

export type PrimitiveAST = TypeString | TypeNumber | TypeNull | TypeBoolean;
export type PrimitiveTypes = PrimitiveAST['type'];
export type ASTTypes = AST['type'];

export interface AbstractAST {
  keyName?: string;
  standaloneName?: string;
  isRequired?: boolean;
  type: ASTTypes;
}

export interface TypeInterface extends AbstractAST {
  type: 'INTERFACE';
  params: InterfaceParams[];
}

export interface InterfaceParams {
  ast: AST;
  keyName: string;
  isRequired: boolean;
}

// Reference type
// Array [], Object {}, Tuple_Array ['Rain120', 18, {}, [] ...]

export interface TypeObject extends AbstractAST {
  type: 'OBJECT';
  params: AST;
}

export interface TypeArray extends AbstractAST {
  type: 'ARRAY';
  params: AST;
}

export interface TypeTupleArray extends AbstractAST {
  type: 'TUPLE_ARRAY';
  params: AST;
}

// primitive type
// string number null boolean (json not has undefined type)

export interface TypeString extends AbstractAST {
  type: 'STRING';
}

export interface TypeNumber extends AbstractAST {
  type: 'NUMBER';
}

export interface TypeNull extends AbstractAST {
  type: 'NULL';
}

export interface TypeBoolean extends AbstractAST {
  type: 'BOOLEAN';
}
