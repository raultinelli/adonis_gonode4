'use strict'

const Route = use('Route')

/**
 * Rotas de Usuários
 */

Route.post('users', 'UserController.store')

/**
 * Rotas de sssão de usuários
 */

Route.post('sessions', 'SessionController.store')

/**
 * Rotas de troca des senha
 */
Route.post('passwords', 'ForgotPasswordController.store')
Route.put('password', 'ForgotPasswordController.update')

/**
 * Rotas de Arquivos
 */
Route.post('files', 'FileController.store')
