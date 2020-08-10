import { AdaCompiler } from './ada';
import { AnalysisTool } from './analysis-tool';
import { AssemblyCompiler } from './assembly';
import { Cc65Compiler } from './cc65';
import { ClangCompiler } from './clang';
import { CleanCompiler } from './clean';
import { DefaultCompiler } from './default';
import { DMDCompiler } from './dmd';
import { EllccCompiler } from './ellcc';
import { EWAVRCompiler } from './ewavr';
import { FakeCompiler } from './fake-for-test';
import { FortranCompiler } from './fortran';
import { GCCCompiler } from './gcc';
import { GolangCompiler } from './golang';
import { HaskellCompiler } from './haskell';
import { ISPCCompiler } from './ispc';
import { JavaCompiler } from './java';
import { LDCCompiler } from './ldc';
import { LLCCompiler } from './llc';
import { LLVMmcaTool } from './llvm-mca';
import { NimCompiler } from './nim';
import { NvccCompiler } from './nvcc';
import { OCamlCompiler } from './ocaml';
import { OptCompiler } from './opt';
import { FPCCompiler } from './pascal';
import { PPCICompiler } from './ppci';
import { PythonCompiler } from './python';
import { RustCompiler } from './rust';
import { SdccCompiler } from './sdcc';
import { SwiftCompiler } from './swift';
import { Win32Compiler } from './win32';
import { Win32VcCompiler } from './win32-vc';
import { WineVcCompiler } from './wine-vc';
import { WslVcCompiler } from './wsl-vc';
import { ZigCompiler } from './zig';

export {
    AdaCompiler,
    AnalysisTool,
    AssemblyCompiler,
    Cc65Compiler,
    ClangCompiler,
    CleanCompiler,
    DefaultCompiler,
    DMDCompiler,
    EllccCompiler,
    EWAVRCompiler,
    FakeCompiler,
    FortranCompiler,
    GCCCompiler,
    GolangCompiler,
    HaskellCompiler,
    ISPCCompiler,
    JavaCompiler,
    LDCCompiler,
    LLCCompiler,
    LLVMmcaTool,
    NimCompiler,
    NvccCompiler,
    OCamlCompiler,
    OptCompiler,
    FPCCompiler,
    PPCICompiler,
    PythonCompiler,
    RustCompiler,
    SdccCompiler,
    SwiftCompiler,
    Win32Compiler,
    Win32VcCompiler,
    WineVcCompiler,
    WslVcCompiler,
    ZigCompiler,
};

const compilerNameMap = {
    ada: AdaCompiler,
    'analysis-tool': AnalysisTool,
    assembly: AssemblyCompiler,
    cc65: Cc65Compiler,
    clang: ClangCompiler,
    clean: CleanCompiler,
    default: DefaultCompiler,
    dmd: DMDCompiler,
    ellcc: EllccCompiler,
    ewavr: EWAVRCompiler,
    'fake-for-test': FakeCompiler,
    fortran: FortranCompiler,
    gcc: GCCCompiler,
    golang: GolangCompiler,
    haskell: HaskellCompiler,
    ispc: ISPCCompiler,
    java: JavaCompiler,
    ldc: LDCCompiler,
    llc: LLCCompiler,
    'llvm-mca': LLVMmcaTool,
    nim: NimCompiler,
    nvcc: NvccCompiler,
    ocaml: OCamlCompiler,
    opt: OptCompiler,
    pascal: FPCCompiler,
    ppci: PPCICompiler,
    python: PythonCompiler,
    rust: RustCompiler,
    sdcc: SdccCompiler,
    swift: SwiftCompiler,
    win32: Win32Compiler,
    'win32-vc': Win32VcCompiler,
    'wine-vc': WineVcCompiler,
    'wsl-vc': WslVcCompiler,
    zig: ZigCompiler,
};

export function getCompilerFromName(name) {
    const compiler = compilerNameMap[name];
    if (compiler === undefined) {
        throw new Error(`No compiler named '${name}' found`);
    }

    return compiler;
}
