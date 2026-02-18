import mat3ra.prode as prode


def test_property_name_enum():
    result = prode.PropertyName.band_gaps
    assert result == "band_gaps"
    assert isinstance(result, str)

