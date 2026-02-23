from enum import Enum
from types import SimpleNamespace

from mat3ra.esse.models.properties_directory.enum_options import (
    ExternalSource,
    PropertyType,
    ScalarPropertyName,
    NonScalarPropertyName,
    TensorPropertyName,
    ObjectPropertyName,
    ProtoPropertyName,
    MetaPropertyName,
)


class AllPropertyName(str, Enum):
    """All property names combined from all categories"""
    pass


for enum_class in [
    ScalarPropertyName,
    NonScalarPropertyName,
    TensorPropertyName,
    ObjectPropertyName,
    ProtoPropertyName,
    MetaPropertyName,
]:
    for item in enum_class:
        setattr(AllPropertyName, item.name, item.value)


PropertyName = SimpleNamespace(
    scalar=ScalarPropertyName,
    non_scalar=NonScalarPropertyName,
    tensor=TensorPropertyName,
    object=ObjectPropertyName,
    proto=ProtoPropertyName,
    meta=MetaPropertyName,
    all=AllPropertyName,
)
