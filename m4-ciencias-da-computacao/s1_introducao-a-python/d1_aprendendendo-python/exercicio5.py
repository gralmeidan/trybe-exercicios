import math


def requiredPaintForArea(area):
    paint_per_sq_meters = 1/3
    paint_per_bucket = 18
    bucket_price = 80

    required_buckets = math.ceil(
        (area * paint_per_sq_meters) / paint_per_bucket)
    total_price = required_buckets * bucket_price

    return (required_buckets, total_price)
