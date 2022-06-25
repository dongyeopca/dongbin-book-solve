class Test_result:
    def __init__(self,kor,eng,math):
        self.kor = kor
        self.eng = eng
        self.math = math

    def total(self):
        return self.kor+self.eng+self.math
        
    def average(self):
        return self.total()/3


minsu = Test_result(80,70,100)
print(minsu.total(),minsu.average())