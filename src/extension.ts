import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('kapix-module-generator.generatekapixModule', async () => {
		const moduleName = await vscode.window.showInputBox({ prompt: "Nombre del Módulo" });
		const author = await vscode.window.showInputBox({ prompt: "Autor" });
		const description = await vscode.window.showInputBox({ prompt: "Descripción" });

		if (!moduleName || !author || !description) {
			vscode.window.showErrorMessage("Todos los campos son requeridos");
			return;
		}

		// Reemplazar espacios con guiones bajos para usar como nombre de carpeta
		const moduleNameSlug = moduleName.replace(/\s+/g, '_');

		// Obtener el path del workspace para generar la carpeta del módulo
		const workspaceRoot = vscode.workspace.rootPath || '';
		const moduleDirectory = path.join(workspaceRoot, 'modules', moduleNameSlug);

		try {
			// Verificar si la carpeta del módulo ya existe
			if (!fs.existsSync(moduleDirectory)) {
				// Crear la carpeta principal del módulo
				fs.mkdirSync(moduleDirectory, { recursive: true });

				// Crear subcarpetas típicas del módulo de kapix CRM
				const subFolders = ['controllers', 'models', 'views', 'helpers', 'language', 'config'];
				subFolders.forEach(subFolder => {
					const subFolderPath = path.join(moduleDirectory, subFolder);
					fs.mkdirSync(subFolderPath);
				});

				// Crear el archivo principal del módulo
				const moduleFile = path.join(moduleDirectory, `${moduleNameSlug}.php`);
				const moduleContent = `<?php
/**
 * Module Name: ${moduleName}
 * Description: ${description}
 * Author: ${author}
 * Version: 1.0.0
 */

// Resto del código del módulo...
`;
				fs.writeFileSync(moduleFile, moduleContent);

				vscode.window.showInformationMessage(`Módulo ${moduleName} creado exitosamente en ${moduleDirectory}`);

			} else {
				vscode.window.showErrorMessage("El módulo ya existe en el directorio.");
			}

		} catch (error) {
			// Manejo del error
			if (error instanceof Error) {
				vscode.window.showErrorMessage(`Error: ${error.message}`);
			} else {
				vscode.window.showErrorMessage("Ocurrió un error desconocido.");
			}
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
