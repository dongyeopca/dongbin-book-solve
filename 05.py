def ltv(b,e):
    ltv_num = b/e*100
    if ltv_num>=70:
        result = "대출불가"
    elif ltv_num>=50:
        result = "비규제지역"
    elif ltv_num>=40:
        result = "조정 9억이하"
    elif ltv_num>=30:
        result = "투기 9억이하"
    elif ltv_num>=20:
        result = "조정 9억초과"
    else:
        result = "투기 9억초과"
    return result,ltv_num

bank = 200000000
estate = 600000000
print(ltv(bank,estate))