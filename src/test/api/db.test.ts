import connectDB from '../../api/db';



describe('Teste de conexão com o banco de dados', () => {
  it('deve se conectar com o banco de dados', async () => {
    await expect(connectDB()).resolves.not.toThrow();
  });
});

