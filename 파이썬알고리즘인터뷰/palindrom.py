class Solution:
    def isPalindrome(self, s: str) -> bool:
        lower_case = s.lower()
        processed_case = ""
        for i in lower_case:
            if ord('a')<=ord(i)<=ord("z") or ord("0")<=ord(i)<=ord("9"):
                processed_case+=i
        start_pointer = 0;
        last_pointer = len(processed_case)-1;

        while start_pointer<=last_pointer:
            if processed_case[start_pointer]==processed_case[last_pointer]:
                start_pointer+=1
                last_pointer-=1
            else:
                return False
        return True