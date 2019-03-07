"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // context.subscriptions.push(
    //   vscode.languages.registerCompletionItemProvider('*', {
    //     provideCompletionItems(
    //       document: vscode.TextDocument,
    //       position: vscode.Position,
    //       token: vscode.CancellationToken
    //     ) {
    //       return [new vscode.CompletionItem('Hello')];
    //     }
    //   })
    // );
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map