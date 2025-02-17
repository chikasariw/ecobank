const apiUrl = process.env.API_URL

export const getBarang = async () => {
  const response = await fetch(`${apiUrl}/item/item`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

  if (!response.ok) {
    throw new Error("Failed to fetch barang data")
  }

  return await response.json()
}

export const addBarang = async (formData: FormData) => {
  const response = await fetch(`${apiUrl}/item/item`, {
    method: "POST",
    body: formData,
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || "Failed to add barang")
  }

  return await response.json()
}

