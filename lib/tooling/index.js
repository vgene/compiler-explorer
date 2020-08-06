import ClangFormatTool from './clang-format-tool';
import ClangQueryTool from './clang-query-tool';
import ClangTidyTool from './clang-tidy-tool';
import CompilerDropinTool from './compiler-dropin-tool';
import LLVMMcaTool from './llvm-mca-tool';
import PaholeTool from './pahole-tool';
import PvsStudioTool from './pvs-studio-tool';
import ReadElfTool from './readelf-tool';
import x86to6502Tool from './x86to6502-tool';

export default {
    'clang-format-tool': ClangFormatTool,
    'clang-query-tool': ClangQueryTool,
    'clang-tidy-tool': ClangTidyTool,
    'compiler-dropin-tool': CompilerDropinTool,
    'llvm-mca-tool': LLVMMcaTool,
    'pahole-tool': PaholeTool,
    'pvs-studio-tool': PvsStudioTool,
    'readelf-tool': ReadElfTool,
    'x86to6502-tool': x86to6502Tool,
};
