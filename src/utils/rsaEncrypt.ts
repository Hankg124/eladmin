import JSEncrypt from 'jsencrypt'

export const rasEncrypt = (val: string) => {
  const encrypt = new JSEncrypt() // 创建加密对象实例
  const publicKey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBANL378k3RiZHWx5AfJqdH9xRNBmD9wGD\n' +
  '2iRe41HdTNF8RUhNnHit5NpMNtGL0NPTSSpPjjI1kJfVorRvaQerUgkCAwEAAQ==' // 注意不要有空格
  encrypt.setPublicKey(publicKey) // 设置公钥
  const pasd = encrypt.encrypt(val)
  return pasd
}
