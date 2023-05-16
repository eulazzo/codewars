using System;

class Program
{
	static void Main(string[] args)
	{
		int[] numeros = { 1, 2, 3, 4, 5,5 };
		var isEqual = ContainsDuplicate(numeros);
        Console.WriteLine($"Repete: {isEqual}");
    }


	static bool ContainsDuplicate(int[] nums)
	{
		bool isRepeat = false;
		for (int i = 0; i < nums.Length; i++)
		{
			for (int j = i+1; j < nums.Length; j++)
			{
				if (nums[i] == nums[j])
				{
					isRepeat = true;
					Console.WriteLine($"Valor I: ${nums[i]}");
					Console.WriteLine($"Valor J: ${nums[j]}");
				}
			}
		}
		return isRepeat;
	}
    
	// Or
	static bool ContainsDuplicateDistincMethod(int[] nums)
	{
		return nums.Length != nums.Distinct().Count();
	}
}

 