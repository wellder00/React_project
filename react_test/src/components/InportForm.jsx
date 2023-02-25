
const InportForm = async(url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    body: data,    
  })

  if (!response.ok) {
    throw new Error (`Помилка за адресою ${url}, статус помилки ${response}`)
  }
  
  return await response.json()
}

export default InportForm;